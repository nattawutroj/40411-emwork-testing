-- CreateTable
CREATE TABLE `routine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_type` ENUM('Development', 'Test', 'Document') NOT NULL,
    `task_name` VARCHAR(191) NOT NULL,
    `start_time` DATETIME(3) NOT NULL,
    `end_time` DATETIME(3) NOT NULL,
    `status` ENUM('InProgress', 'Completed', 'Cancelled') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
