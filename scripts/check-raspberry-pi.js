// Script to check isRaspberryPi values directly in the database
// Run with: node scripts/check-raspberry-pi.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDisplays() {
  try {
    console.log('\n=== Checking isRaspberryPi values in database ===\n');

    const displays = await prisma.display.findMany({
      select: {
        id: true,
        name: true,
        isRaspberryPi: true,
        updatedAt: true,
      },
      orderBy: {
        name: 'asc'
      }
    });

    if (displays.length === 0) {
      console.log('No displays found in database');
      return;
    }

    console.log(`Found ${displays.length} display(s):\n`);

    displays.forEach(display => {
      console.log(`Display: ${display.name}`);
      console.log(`  ID: ${display.id}`);
      console.log(`  isRaspberryPi: ${display.isRaspberryPi}`);
      console.log(`  Last Updated: ${display.updatedAt}`);
      console.log('---');
    });

    // Count Raspberry Pi displays
    const rpiCount = displays.filter(d => d.isRaspberryPi === true).length;
    console.log(`\nSummary: ${rpiCount} of ${displays.length} displays are marked as Raspberry Pi\n`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDisplays();