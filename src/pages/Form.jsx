import { useEffect, useState } from 'react';
import '../styles/pages/form.scss';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';
import Field from '../components/Field';
import Canvas from '../components/Canvas';
import Preview from '../components/Preview';

const Form = () => {
  const location = useLocation();
  const formName = location?.state?.FileName;
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem('dynamicForm') || '[]');
  });

  const [droppedFields, setDroppedFields] = useState([]);
  const [searchParams] = useSearchParams();
  // const playAction = searchParams.get('playAction');
  const viewId = searchParams.get('viewId');
  const editId = searchParams.get('editId');

  useEffect(() => {
    if (editId || (viewId !== null && formData[editId || viewId])) {
      const existingFields = formData[editId || viewId]?.fields || [];
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDroppedFields(existingFields);
    }
  }, [editId, viewId]);

  const updateField = (id, updatedProperties) => {
    setDroppedFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, ...updatedProperties } : field)),
    );
  };

  const handleSave = () => {
    const modifiedFormDetails = [...formData];

    if (editId || (viewId !== null && modifiedFormDetails[editId || viewId])) {
      modifiedFormDetails[editId || viewId] = {
        ...modifiedFormDetails[editId || viewId],
        fields: droppedFields,
      };
    } else {
      const existingFormIndex = modifiedFormDetails.findIndex((form) => form.FileName === formName);
      if (existingFormIndex !== -1) {
        modifiedFormDetails[existingFormIndex].fields = droppedFields;
      }
    }

    localStorage.setItem('dynamicForm', JSON.stringify(modifiedFormDetails));
    navigate('/');
  };

  return (
    <div>
      <div className="header">
        <h1>{formName || formData[editId || viewId]?.FileName}</h1>
        <div className="button-Container">
          {!viewId && <Button value={editId ? 'update' : 'save'} onClick={() => handleSave()} />}
          <Button
            value="Cancel"
            onClick={() => {
              navigate('/');
            }}
          />
        </div>
      </div>
      <div className="main-container">
        <Field viewMode={viewId} />
        <Canvas
          droppedFields={droppedFields}
          setDroppedFields={setDroppedFields}
          updateField={updateField}
          viewId={viewId ? true : false}
        />
        <Preview droppedFields={droppedFields} viewId={viewId ? false : true} />
      </div>
    </div>
  );
};

export default Form;
