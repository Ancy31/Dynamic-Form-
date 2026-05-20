import React, { useState } from 'react';
import '../styles/pages/dashboard.scss';
import hero from '../assets/hero.jfif';
import { IoMdClose } from 'react-icons/io';
import { SiGoogleforms } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
const Dashboard = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [forms, setForms] = useState(JSON.parse(localStorage.getItem('dynamicForm')) || []);
  const [newForm, setNewForm] = useState('');
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleDeleteForm = (index, e) => {
    e.stopPropagation();
    const newForms = forms.filter((_, i) => i !== index);
    setForms(newForms);
    localStorage.setItem('dynamicForm', JSON.stringify(newForms));
    setActiveTooltip(null);
  };

  const handleEditForm = (form, e) => {
    e.stopPropagation();
    navigate('/dashboard/form', { state: form.FileName });
  };

  const handleViewDetails = (form, e) => {
    e.stopPropagation();
    alert(`Viewing details for: ${form.FileName}`);
    setActiveTooltip(null);
  };

  return (
    <div className="main-Container">
      <div className="header">
        <h1>Dynamic Form</h1>
        <Button
          value="Create +"
          onClick={() => {
            setIsModal(true);
          }}
        />
      </div>
      <div className="form-list">
        {forms?.map((form, index) => {
          return (
            <div 
              className="form" 
              key={index} 
              onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              <span>
                <SiGoogleforms />
              </span>
              <h3>{form.FileName}</h3>
              
              {activeTooltip === index && (
                <div className="tooltip-menu">
                  <div className="tooltip-item" onClick={(e) => handleEditForm(form, e)}>Edit</div>
                  <div className="tooltip-item" onClick={(e) => handleViewDetails(form, e)}>View Details</div>
                  <div className="tooltip-item delete" onClick={(e) => handleDeleteForm(index, e)}>Delete</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {isModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div>
              <h2>Create Form</h2>
              <span>
                <IoMdClose
                  onClick={() => {
                    setIsModal(false);
                  }}
                />
              </span>
            </div>
            <Input
              type="text"
              name="name"
              placeholder="enter name "
              onChange={(event) => {
                setNewForm(event.target.value);
              }}
            />
            <Button
              value="Create Form"
              onClick={() => {
                setIsModal(false);
                const newFormsList = [...forms, { FileName: newForm }];
                setForms(newFormsList);
                localStorage.setItem('dynamicForm', JSON.stringify(newFormsList));
                navigate('/dashboard/form', { state: newForm });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
