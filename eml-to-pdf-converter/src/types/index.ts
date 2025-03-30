// src/types/index.ts

export interface FileUploadProps {
    onFileChange: (file: File) => void;
    acceptedFileTypes: string[];
}

export interface ConversionResponse {
    success: boolean;
    message: string;
    pdfUrl?: string;
}