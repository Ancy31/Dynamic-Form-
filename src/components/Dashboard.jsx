import React, { useState } from 'react';
import '../styles/components/dashboard.scss';
import hero from '../assets/hero.jfif';
import { IoMdClose } from 'react-icons/io';
import { SiGoogleforms } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import Button from '../pages/Button';
const Dashboard = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const formData = JSON.parse(localStorage.getItem('dynamicForm')) || [];
  const [newForm, setNewForm] = useState('');

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
        {formData?.map((form, index) => {
          return (
            <div className="form" key={index}>
              <span>
                <SiGoogleforms />
              </span>
              <h3>{form.FileName}</h3>
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
            <input
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
                const newData = formData?.push({ FileName: newForm });
                localStorage.setItem('dynamicForm', JSON.stringify(formData));
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
