/*
  Warnings:

  - You are about to drop the column `Calle` on the `contratar` table. All the data in the column will be lost.
  - You are about to drop the column `Casa` on the `contratar` table. All the data in the column will be lost.
  - You are about to drop the column `Numero` on the `contratar` table. All the data in the column will be lost.
  - Added the required column `Barrio` to the `contratar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Domicilio` to the `contratar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Mail` to the `contratar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contratar` DROP COLUMN `Calle`,
    DROP COLUMN `Casa`,
    DROP COLUMN `Numero`,
    ADD COLUMN `Barrio` VARCHAR(191) NOT NULL,
    ADD COLUMN `Domicilio` VARCHAR(191) NOT NULL,
    ADD COLUMN `Mail` VARCHAR(191) NOT NULL;
