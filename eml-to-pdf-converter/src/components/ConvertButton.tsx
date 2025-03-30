import React from 'react';

interface ConvertButtonProps {
    onConvert: () => void;
}

const ConvertButton: React.FC<ConvertButtonProps> = ({ onConvert }) => {
    return (
        <button onClick={onConvert}>
            Convert EML to PDF
        </button>
    );
};

export default ConvertButton;