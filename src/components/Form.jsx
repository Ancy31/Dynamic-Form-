import React, { useState } from 'react';
import '../styles/components/form.scss';
import { fields, handleDrag, dropItem, allowDrop, renderFields } from '../constants/form';
import { IconBase } from 'react-icons';
import { MdOutlineTableRows } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../pages/Button';
import { MdDelete } from 'react-icons/md';

// import '../constants/form'
const Form = () => {
  const location = useLocation();
  const formName = location?.state;
  const navigate = useNavigate();
  const [droppedFields, setDroppedFields] = useState([]);
  return (
    <div>
      <div className="header">
        <h1>{formName}</h1>
        <div className="button-Container">
          <Button
            value="Save"
            onClick={() => {
              navigate('/');
            }}
          />
          <Button
            value="Cancel"
            onClick={() => {
              navigate('/');
            }}
          />
        </div>
      </div>
      <div className="main-container">
        <div className="fields-container">
          {fields?.map((field, index) => {
            return (
              <div
                className="fields"
                key={index}
                draggable="true"
                onDragStart={(event) => handleDrag(event, index)}
              >
                <p>{field?.name}</p>
                <span>{field?.icon}</span>
              </div>
            );
          })}
        </div>
        <div
          className="canvas-container"
          dropzone="copy"
          onDrop={(event) => dropItem(event, setDroppedFields)}
          onDragOver={(event) => allowDrop(event)}
        >
          {droppedFields?.map((item) => (
            <>
              <div key={item?.id} className="field-Container">
                <div style={{ width: '200px' }}>
                  {item?.icon}
                  <label style={{ fontWeight: 'bold' }}>{item?.name}:</label>
                </div>
                <div id="field-render" style={{ width: '300px' }}>
                  {renderFields(item?.name)}
                </div>
                <div>
                  <input type="checkbox" name="required" value="yes" />
                  <label>Required</label>
                </div>
                <span
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <MdDelete />
                </span>
              </div>
            </>
          ))}
        </div>
        <div className="preview-container">
          <div className="mobile-container">
            <div className="mobile-header"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
