-- Direct SQL to check isRaspberryPi values
-- Run this in your PostgreSQL container:
-- docker exec -it isodisplay-db-1 psql -U isodisplay -d isodisplay

-- Show all displays with isRaspberryPi field
SELECT id, name, "isRaspberryPi", "updatedAt"
FROM "Display"
ORDER BY name;

-- Count displays by isRaspberryPi value
SELECT "isRaspberryPi", COUNT(*) as count
FROM "Display"
GROUP BY "isRaspberryPi";

-- Show column information for Display table
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'Display'
AND column_name = 'isRaspberryPi';