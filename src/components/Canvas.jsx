import React from 'react';
import { dropItem, allowDrop, renderFields, handleDelete } from '../utils/formUtils';
import Input from './Input';
import { MdDelete } from 'react-icons/md';

const Canvas = ({ droppedFields, setDroppedFields, updateField }) => {
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
            {item?.icon}
            <label>{item?.name}:</label>
          </div>
          <div className="field-render">
            {renderFields(item, updateField)}
          </div>
          {!['Image', 'Video', 'Audio'].includes(item?.name) && (
            <div className="field-required">
              <Input type="checkbox" name="required" value="yes" />
              <label>Required</label>
            </div>
          )}

          <span
            onClick={() => {
              handleDelete(index, setDroppedFields);
            }}
          >
            <MdDelete />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Canvas;
