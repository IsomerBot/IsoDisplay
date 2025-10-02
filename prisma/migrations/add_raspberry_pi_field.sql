-- Add isRaspberryPi field to Display table
ALTER TABLE "Display"
ADD COLUMN IF NOT EXISTS "isRaspberryPi" BOOLEAN DEFAULT false NOT NULL;