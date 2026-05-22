import Input from '../components/Input';
import MultiOptionField from '../components/MultiOptionField';
import MediaPreviewField from '../components/MediaPreviewField';
import MediaUploadField from '../components/MediaUploadField';
import { fields } from '../constants/form';
import '../styles/pages/form.scss';

export const handleDrag = (event, index) => {
  event.dataTransfer.setData('text', index);
};

export const dropItem = (event, setDroppedFields) => {
  event.preventDefault();
  const canvasIndex = event.dataTransfer.getData('canvas-index');
  if (canvasIndex !== '') {
    const sourceIndex = parseInt(canvasIndex, 10);
    setDroppedFields((prev) => {
      const newFields = [...prev];
      const [draggedItem] = newFields.splice(sourceIndex, 1);
      newFields.push(draggedItem);
      return newFields;
    });
  } else {
    const data = event.dataTransfer.getData('text');
    if (data !== '') {
      const field = JSON.parse(data);
      const draggableField = fields[field];
      setDroppedFields((prev) => [...prev, { ...draggableField, id: Date.now() }]);
    }
  }
};

export const allowDrop = (event) => {
  event.preventDefault();
};

export const handleCanvasDragStart = (event, index) => {
  event.dataTransfer.setData('canvas-index', index);
};

export const handleCanvasDropItem = (event, targetIndex, setDroppedFields) => {
  event.preventDefault();
  event.stopPropagation();
  const canvasIndex = event.dataTransfer.getData('canvas-index');

  if (canvasIndex !== '') {
    const sourceIndex = parseInt(canvasIndex, 10);
    setDroppedFields((prev) => {
      const newFields = [...prev];
      const [draggedItem] = newFields.splice(sourceIndex, 1);
      newFields.splice(targetIndex, 0, draggedItem);
      return newFields;
    });
  } else {
    const data = event.dataTransfer.getData('text');
    if (data !== '') {
      const field = JSON.parse(data);
      const draggableField = fields[field];
      setDroppedFields((prev) => {
        const newFields = [...prev];
        newFields.splice(targetIndex, 0, { ...draggableField, id: Date.now() });
        return newFields;
      });
    }
  }
};

export const renderFields = (item, updateField, isViewMode) => {
  const fieldType = item?.name;
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
            isViewMode={isViewMode}
            onChange={(e) => updateField(item?.id, { label: e?.target?.value })}
          />
        </div>
      );
    case 'checkbox':
    case 'radio':
    case 'Dropdown':
      return <MultiOptionField item={item} updateField={updateField} isViewMode={isViewMode} />;
    case 'Image':
    case 'Audio':
    case 'Video':
      return <MediaUploadField item={item} updateField={updateField} isViewMode={isViewMode} />;
    default:
      return <div>No Field type Found</div>;
  }
};

export const renderPreviewField = (field, isViewMode) => {
  const fieldType = field?.name;

  switch (fieldType) {
    case 'Textfield':
      return (
        <Input type="text" placeholder={fieldType} className="inputStyle" isViewMode={isViewMode} />
      );
    case 'Number':
      return (
        <Input
          type="number"
          placeholder={fieldType}
          className="inputStyle"
          isViewMode={isViewMode}
        />
      );
    case 'Date':
      return <Input type="date" className="inputStyle" isViewMode={isViewMode} />;
    case 'Multiline':
      return (
        <textarea
          placeholder={fieldType}
          className="inputStyle"
          style={{ minHeight: '80px' }}
          disabled={isViewMode}
        />
      );
    case 'FileUpload':
      return <Input type="file" className="inputStyle" isViewMode={isViewMode} />;
    case 'Date Time':
      return <Input type="datetime-local" className="inputStyle" isViewMode={isViewMode} />;
    case 'checkbox':
    case 'radio':
      return (
        <div className="optional-fields">
          {field?.options?.length > 0 ? (
            field?.options?.map((opt) => (
              <div key={opt?.id} className="options">
                <Input type={fieldType} isViewMode={isViewMode} />
                <label>{opt?.value || 'Option'}</label>
              </div>
            ))
          ) : (
            <div className="options">
              <Input type={fieldType} isViewMode={isViewMode} />
              <label>Option</label>
            </div>
          )}
        </div>
      );
    case 'Dropdown':
      return (
        <select className="inputStyle">
          {field.options?.length > 0 ? (
            field.options.map((opt) => (
              <option key={opt.id} value={opt.value}>
                {opt.value || 'Option'}
              </option>
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
