import { dropItem, allowDrop, renderFields, handleDelete } from '../utils/formUtils';
import Input from './Input';
import { MdDelete } from 'react-icons/md';

const Canvas = ({ droppedFields, setDroppedFields, updateField, viewId }) => {
  console.log(viewId);
  return (
    <div
      className="canvas-container"
      dropzone="copy"
      onDrop={(event) => dropItem(event, setDroppedFields)}
      onDragOver={(event) => allowDrop(event)}
    >
      {droppedFields?.map((item, index) => (
        <div key={index} className="field-Container">
          <div className="field-info">
            {item?.required}
            <label>{item?.name || item?.label}:</label>
          </div>
          <div className="field-render">{renderFields(item, updateField, viewId)}</div>
          {!['Image', 'Video', 'Audio'].includes(item?.name) && (
            <div className="field-required">
              <Input
                className="inputStyle"
                type="checkbox"
                name="required"
                checked={item?.required || false}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setDroppedFields((prev) =>
                    prev.map((field, fIndex) =>
                      (item.id && field.id === item.id) || fIndex === index
                        ? { ...field, required: isChecked }
                        : field,
                    ),
                  );
                }}
                isViewMode={viewId}
              />
              <label>Required</label>
            </div>
          )}

          <span
            onClick={() => {
              !viewId ? handleDelete(index, setDroppedFields) : {};
            }}
            style={{ cursor: viewId ? 'not-allowed' : 'pointer' }}
          >
            <MdDelete color={viewId ? 'gray' : 'red'} />
          </span>
          {/* {console.log(item?.required)} */}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
