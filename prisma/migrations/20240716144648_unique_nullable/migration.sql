/*
  Warnings:

  - A unique constraint covering the columns `[DNI]` on the table `contratar` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[contratar] ALTER COLUMN [Casa] NVARCHAR(1000) NULL;

-- CreateIndex
ALTER TABLE [dbo].[contratar] ADD CONSTRAINT [contratar_DNI_key] UNIQUE NONCLUSTERED ([DNI]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
