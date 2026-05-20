import React, { useRef } from 'react';
import Input from './Input';
import Button from './Button';

const MediaUploadField = ({ item, updateField }) => {
  const fileInputRef = useRef(null);
  const type = item.name;

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updateField(item.id, { mediaUrl: url });
    }
  };

  const triggerUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <Input
        type="text"
        name={type}
        placeholder={type}
        value={item.label || ''}
        onChange={(e) => updateField(item.id, { label: e.target.value })}
        style={{ marginBottom: '10px' }}
      />
      <div>
        <input 
          type="file" 
          accept={`${type.toLowerCase()}/*`} 
          style={{ display: 'none' }} 
          ref={fileInputRef} 
          onChange={handleUpload} 
        />
        <Button value={`Upload ${type}`} onClick={triggerUpload} />
      </div>
    </div>
  );
};

export default MediaUploadField;
