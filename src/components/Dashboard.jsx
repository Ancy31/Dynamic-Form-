import React, { useState } from 'react';
import '../styles/components/dashboard.scss';
import hero from '../assets/hero.jfif';
import { IoMdClose } from 'react-icons/io';
import { SiGoogleforms } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  
  return (
    <div className="main-Container">
      <div className="header">
        <h1>Dynamic Form</h1>
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          Create +
        </button>
      </div>
      <div className="form-list">
        <div className="form">
          <span>
            <SiGoogleforms />
          </span>
          <h3>jdkdklsjdkasjdkjk</h3>
        </div>
      </div>
      {modal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div>
              <h2>Create Form</h2>
              <span>
                <IoMdClose
                  onClick={() => {
                    setModal(false);
                  }}
                />
              </span>
            </div>
            <input type="text" name="name" placeholder="enter name " />
            <button
              onClick={() => {
                setModal(false);
                navigate('/dashboard/form');
              }}
            >
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
