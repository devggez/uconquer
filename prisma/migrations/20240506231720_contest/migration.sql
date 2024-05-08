-- CreateTable
CREATE TABLE `Contest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(225) NOT NULL,
    `description` TEXT NOT NULL,
    `problems` TEXT NOT NULL,
    `requerments` TEXT NOT NULL,
    `end` TEXT NOT NULL,
    `start` TEXT NOT NULL,
    `owner` VARCHAR(225) NOT NULL,
    `status` ENUM('CLOSED', 'RUNNING', 'UP_COMEING') NOT NULL DEFAULT 'RUNNING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
