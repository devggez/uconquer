/*
  Warnings:

  - Added the required column `inputVal` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outputVal` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Issue` ADD COLUMN `inputVal` TEXT NOT NULL,
    ADD COLUMN `outputVal` TEXT NOT NULL,
    ADD COLUMN `owner` VARCHAR(225) NOT NULL;
