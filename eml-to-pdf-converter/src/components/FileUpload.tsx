import React, { useCallback } from 'react';

const FileUpload: React.FC = () => {
  const onFileChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${file.name.replace('.eml', '')}.pdf`;
        a.click();
      }
    } catch (error) {
      console.error('Conversion failed:', error);
    }
  }, []);

  return (
    <div>
      <input
        type="file"
        accept=".eml"
        onChange={onFileChange}
      />
    </div>
  );
};

export default FileUpload;