export interface StateContratar {
    error?: {
        Nombre?: string[];
        DNI?: string[];
        Telefono?: string[];
        Calle?: string[];
        Numero?: string[];
        Casa?: string[];
        Plan?: string[];
    };
    message?: null | string;
}
