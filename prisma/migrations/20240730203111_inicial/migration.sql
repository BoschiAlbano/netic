-- CreateTable
CREATE TABLE `contratar` (
    `id` VARCHAR(191) NOT NULL,
    `Nombre` VARCHAR(191) NOT NULL,
    `DNI` INTEGER NOT NULL,
    `Telefono` INTEGER NOT NULL,
    `Calle` VARCHAR(191) NOT NULL,
    `Numero` INTEGER NOT NULL,
    `Casa` VARCHAR(191) NULL,
    `Plan` INTEGER NOT NULL,
    `Column` VARCHAR(191) NOT NULL DEFAULT 'Nuevo',
    `Eliminado` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `contratar_DNI_key`(`DNI`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Eliminado` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `usuario_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
