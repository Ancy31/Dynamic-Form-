import { renderPreviewField } from '../utils/formUtils';

const Preview = ({ droppedFields, isViewMode }) => {
  return (
    <div className="preview-container">
      <div className="mobile-container">
        <div className="mobile-header"></div>
        {droppedFields?.map((field, index) => (
          <div key={`preview-${index}`} className="preview-item">
            <label className="preview-item-label">
              {field.label || field.name}
              {field?.required && <span style={{ color: 'red' }}> *</span>}
            </label>
            {renderPreviewField(field, isViewMode)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
