import React, { useState } from 'react';
import '../styles/pages/form.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Field from '../components/Field';
import Canvas from '../components/Canvas';
import Preview from '../components/Preview';

const Form = () => {
  const location = useLocation();
  const formName = location?.state;
  const navigate = useNavigate();
  const [droppedFields, setDroppedFields] = useState([]);

  const updateField = (id, updatedProperties) => {
    setDroppedFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, ...updatedProperties } : field)),
    );
  };

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
        <Field />
        <Canvas
          droppedFields={droppedFields}
          setDroppedFields={setDroppedFields}
          updateField={updateField}
        />
        <Preview droppedFields={droppedFields} />
      </div>
    </div>
  );
};

export default Form;
