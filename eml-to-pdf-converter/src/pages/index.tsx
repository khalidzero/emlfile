import React from 'react';
import FileUpload from '../components/FileUpload';
import ConvertButton from '../components/ConvertButton';
import DownloadButton from '../components/DownloadButton';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>EML to PDF Converter</h1>
            <FileUpload />
            <ConvertButton />
            <DownloadButton />
        </div>
    );
};

export default HomePage;