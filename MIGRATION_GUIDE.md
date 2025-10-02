# Database Migration Guide - Add Raspberry Pi Field

This guide provides step-by-step instructions to add the `isRaspberryPi` field to your existing IsoDisplay database.

## Pre-Migration Checklist

- [ ] Backup your database (recommended)
- [ ] Ensure your Docker containers are running
- [ ] Have your database credentials ready

## Method 1: Direct SQL Migration (Quickest)

### Step 1: Connect to the Database

```bash
# Connect to your PostgreSQL container
docker exec -it isodisplay-db psql -U isodisplay -d isodisplay
```

When prompted, enter your POSTGRES_PASSWORD from your `.env` file.

### Step 2: Run the Migration

Once connected to PostgreSQL, run:

```sql
-- Add the isRaspberryPi field to the Display table
ALTER TABLE "Display"
ADD COLUMN IF NOT EXISTS "isRaspberryPi" BOOLEAN DEFAULT false NOT NULL;

-- Verify the column was added
\d "Display"
```

### Step 3: Exit PostgreSQL

```sql
\q
```

## Method 2: Using Prisma Migrate (Recommended for Production)

### Step 1: Access the App Container

```bash
# Enter the app container
docker exec -it isodisplay-app sh
```

### Step 2: Generate and Apply Migration

```bash
# Generate the Prisma client (if needed)
npx prisma generate

# Create and apply the migration
npx prisma migrate deploy
```

If the above doesn't work because migrations weren't previously set up:

```bash
# Mark the current schema as baseline
npx prisma migrate resolve --applied "initial_migration"

# Then create the new migration
npx prisma migrate dev --name add_raspberry_pi_field
```

### Step 3: Exit the Container

```bash
exit
```

## Method 3: Using Docker Compose Exec (From Host)

Run these commands from your host machine without entering containers:

```bash
# Option A: Direct SQL execution
docker exec isodisplay-db psql -U isodisplay -d isodisplay -c 'ALTER TABLE "Display" ADD COLUMN IF NOT EXISTS "isRaspberryPi" BOOLEAN DEFAULT false NOT NULL;'

# Option B: Using Prisma
docker exec isodisplay-app npx prisma migrate deploy
```

## Verification Steps

After running the migration, verify it worked:

### Check the Database Schema

```bash
# Connect and check the table structure
docker exec isodisplay-db psql -U isodisplay -d isodisplay -c '\d "Display"'
```

You should see the `isRaspberryPi` column in the output.

### Test in the Application

1. Navigate to your IsoDisplay admin interface
2. Go to Displays
3. Edit an existing display
4. You should see the "Raspberry Pi Display" toggle

## Rollback Instructions (If Needed)

If you need to rollback the migration:

```bash
# Connect to the database
docker exec -it isodisplay-db psql -U isodisplay -d isodisplay

# Remove the column
ALTER TABLE "Display" DROP COLUMN IF EXISTS "isRaspberryPi";

# Exit
\q
```

## Troubleshooting

### Permission Denied Error
If you get a permission error, make sure you're using the correct database user:
```bash
docker exec -it isodisplay-db psql -U postgres -d isodisplay
```

### Container Names Different
If your container names are different, list them first:
```bash
docker ps
```
Then use your actual container names instead of `isodisplay-db` and `isodisplay-app`.

### Migration Already Applied
The migration is idempotent (safe to run multiple times) thanks to `IF NOT EXISTS`. If you see a message that the column already exists, the migration was successful.

### Database Connection Issues
Ensure your `.env` file has the correct credentials:
```env
POSTGRES_DB=isodisplay
POSTGRES_USER=isodisplay
POSTGRES_PASSWORD=your_password_here
```

## Post-Migration

After successful migration:

1. **Restart the app container** (optional but recommended):
   ```bash
   docker restart isodisplay-app
   ```

2. **Configure your Raspberry Pi displays**:
   - Go to the admin interface
   - Edit each display that's running on a Raspberry Pi
   - Enable the "Raspberry Pi Display" toggle
   - Save the changes

3. **Remove URL parameters** (if you were using them):
   - Your displays no longer need `?pi=true` in their URLs
   - The setting is now stored in the database

## Support

If you encounter issues:

1. Check the container logs:
   ```bash
   docker logs isodisplay-app
   docker logs isodisplay-db
   ```

2. Ensure your database is healthy:
   ```bash
   docker ps
   ```

3. Verify network connectivity between containers:
   ```bash
   docker network ls
   docker network inspect isodisplay-network
   ```