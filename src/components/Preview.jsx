import React from 'react';
import { renderPreviewField } from '../utils/formUtils';

const Preview = ({ droppedFields }) => {
  return (
    <div className="preview-container">
      <div className="mobile-container">
        <div className="mobile-header"></div>
        {droppedFields?.map((field, index) => (
          <div key={`preview-${index}`} className="preview-item">
            <label className="preview-item-label">{field.label || field.name}</label>
            {renderPreviewField(field)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
