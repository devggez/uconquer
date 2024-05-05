/*
  Warnings:

  - Made the column `inputVal` on table `Issue` required. This step will fail if there are existing NULL values in that column.
  - Made the column `outputVal` on table `Issue` required. This step will fail if there are existing NULL values in that column.
  - Made the column `owner` on table `Issue` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Issue` MODIFY `inputVal` TEXT NOT NULL,
    MODIFY `outputVal` TEXT NOT NULL,
    MODIFY `owner` VARCHAR(225) NOT NULL;
