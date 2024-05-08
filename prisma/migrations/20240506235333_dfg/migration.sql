/*
  Warnings:

  - The values [Coming] on the enum `Contest_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Contest` MODIFY `status` ENUM('CLOSED', 'RUNNING', 'Comeing') NOT NULL DEFAULT 'RUNNING';
