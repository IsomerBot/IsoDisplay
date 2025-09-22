const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  console.log('🌱 Starting database seed');

  if (!adminEmail || !adminUsername || !adminPassword) {
    console.warn('⚠️  Skipping admin creation because ADMIN_EMAIL, ADMIN_USERNAME, or ADMIN_PASSWORD is not set.');
    console.warn('    Provide these variables and re-run "npx prisma db seed" to create the initial admin user.');
    return;
  }

  const existingUser = await prisma.user.findUnique({ where: { email: adminEmail } });
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  if (existingUser) {
    console.log(`🔄 Admin user with email ${adminEmail} already exists. Updating credentials.`);
    await prisma.user.update({
      where: { id: existingUser.id },
      data: {
        username: adminUsername,
        password: hashedPassword,
        permissions: existingUser.permissions?.length
          ? existingUser.permissions
          : ['SYSTEM_SETTINGS', 'USER_CONTROL', 'PLAYLIST_CREATE'],
        status: existingUser.status ?? 'ACTIVE',
      },
    });
  } else {
    console.log(`👤 Creating admin user ${adminEmail}`);
    await prisma.user.create({
      data: {
        email: adminEmail,
        username: adminUsername,
        password: hashedPassword,
        permissions: ['SYSTEM_SETTINGS', 'USER_CONTROL', 'PLAYLIST_CREATE'],
        status: 'ACTIVE',
      },
    });
  }

  console.log('✅ Database seed completed. Admin credentials are configured.');
}

main()
  .catch((error) => {
    console.error('❌ Error during seeding:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
