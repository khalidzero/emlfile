import React, { useState } from 'react';

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    return (
        <div>
            <input type="file" accept=".eml" onChange={handleFileChange} />
            {file && <p>Selected file: {file.name}</p>}
        </div>
    );
};

export default FileUpload;