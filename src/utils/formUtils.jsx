import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import MultiOptionField from '../components/MultiOptionField';
import MediaPreviewField from '../components/MediaPreviewField';
import MediaUploadField from '../components/MediaUploadField';
import { fields } from '../constants/form';

export const handleDrag = (event, index) => {
  event.dataTransfer.setData('text', index);
};

export const dropItem = (event, setDroppedFields) => {
  event.preventDefault();
  console.log(event);
  const data = event.dataTransfer.getData('text');
  const field = JSON.parse(data);
  const draggableField = fields[field];
  setDroppedFields((prev) => [...prev, { ...draggableField, id: Date.now() }]);
};

export const allowDrop = (event) => {
  event.preventDefault();
};

export const renderFields = (item, updateField) => {
  const fieldType = item.name;
  switch (fieldType) {
    case 'Textfield':
    case 'Number':
    case 'Date':
    case 'Multiline':
    case 'FileUpload':
    case 'Date Time':
      return (
        <div>
          <Input 
            type="text" 
            name={fieldType} 
            placeholder={fieldType} 
            value={item.label || ''}
            onChange={(e) => updateField(item.id, { label: e.target.value })}
          />
        </div>
      );
    case 'Checkbox':
    case 'Radio':
    case 'Dropdown':
      return <MultiOptionField item={item} updateField={updateField} />;
    case 'Image':
    case 'Audio':
    case 'Video':
      return <MediaUploadField item={item} updateField={updateField} />;
    default:
      return <div>No Field type Found</div>;
  }
};

export const renderPreviewField = (field) => {
  const fieldType = field.name;
  const inputStyle = { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box', outline: 'none' };

  switch (fieldType) {
    case 'Textfield':
      return <Input type="text" placeholder={field.label || fieldType} style={inputStyle} />;
    case 'Number':
      return <Input type="number" placeholder={field.label || fieldType} style={inputStyle} />;
    case 'Date':
      return <Input type="date" style={inputStyle} />;
    case 'Multiline':
      return <textarea placeholder={field.label || fieldType} style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }} />;
    case 'FileUpload':
      return <Input type="file" style={inputStyle} />;
    case 'Date Time':
      return <Input type="datetime-local" style={inputStyle} />;
    case 'Checkbox':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {field.options?.length > 0 ? (
            field.options.map((opt) => (
              <div key={opt.id} style={{ display: 'flex', alignItems: 'center' }}>
                <Input type="checkbox" style={{ marginRight: '8px', width: '16px', height: '16px' }} /> 
                <label style={{ color: '#555' }}>{opt.value || 'Option'}</label>
              </div>
            ))
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Input type="checkbox" style={{ marginRight: '8px', width: '16px', height: '16px' }} /> 
              <label style={{ color: '#555' }}>Option</label>
            </div>
          )}
        </div>
      );
    case 'Radio':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {field.options?.length > 0 ? (
            field.options.map((opt) => (
              <div key={opt.id} style={{ display: 'flex', alignItems: 'center' }}>
                <Input type="radio" name={`radio-${field.id}`} style={{ marginRight: '8px', width: '16px', height: '16px' }} /> 
                <label style={{ color: '#555' }}>{opt.value || 'Option'}</label>
              </div>
            ))
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Input type="radio" style={{ marginRight: '8px', width: '16px', height: '16px' }} /> 
              <label style={{ color: '#555' }}>Option</label>
            </div>
          )}
        </div>
      );
    case 'Dropdown':
      return (
        <select style={inputStyle}>
          {field.options?.length > 0 ? (
            field.options.map((opt) => (
              <option key={opt.id} value={opt.value}>{opt.value || 'Option'}</option>
            ))
          ) : (
            <option>Select Option</option>
          )}
        </select>
      );
    case 'Image':
    case 'Audio':
    case 'Video':
      return <MediaPreviewField field={field} />;
    default:
      return null;
  }
};

export const handleDelete = (indexToDelete, setDroppedFields) => {
  setDroppedFields((prevFields) => prevFields.filter((_, index) => index !== indexToDelete));
};
