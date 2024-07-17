BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[contratar] (
    [id] NVARCHAR(1000) NOT NULL,
    [Nombre] NVARCHAR(1000) NOT NULL,
    [DNI] INT NOT NULL,
    [Telefono] INT NOT NULL,
    [Calle] NVARCHAR(1000) NOT NULL,
    [Numero] INT NOT NULL,
    [Casa] NVARCHAR(1000) NOT NULL,
    [Plan] INT NOT NULL,
    CONSTRAINT [contratar_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH