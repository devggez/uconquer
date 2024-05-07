/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Contest` table. All the data in the column will be lost.
  - You are about to alter the column `end` on the `Contest` table. The data in that column could be lost. The data in that column will be cast from `Text` to `DateTime(3)`.
  - You are about to alter the column `start` on the `Contest` table. The data in that column could be lost. The data in that column will be cast from `Text` to `DateTime(3)`.
  - The values [UP_COMEING] on the enum `Contest_status` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `updatedAt` to the `Contest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Contest` DROP COLUMN `updateAt`,
    ADD COLUMN `image` TEXT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `problems` TEXT NULL,
    MODIFY `requerments` TEXT NULL,
    MODIFY `end` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `start` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `status` ENUM('CLOSED', 'RUNNING', 'Coming') NOT NULL DEFAULT 'RUNNING';
