/* eslint-disable react-hooks/static-components */
import { useEffect, useState } from 'react';
import '../styles/pages/dashboard.scss';
import { IoMdClose } from 'react-icons/io';
import { SiGoogleforms } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import {
  handleDeleteForm,
  handleEditForm,
  handleViewDetails,
  handleFormCreation,
} from '../utils/dashboardUtils';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [forms, setForms] = useState(JSON.parse(localStorage.getItem('dynamicForm')) || []);
  const [newForm, setNewForm] = useState('');
  const [activeTooltipIndex, setActiveTooltipIndex] = useState('');
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e, index) => {
    e.stopPropagation();

    if (activeTooltipIndex === index) {
      setActiveTooltipIndex(null);
    } else {
      setActiveTooltipIndex(index);
      setPopoverPosition({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    const closePopover = () => setActiveTooltipIndex(null);
    if (activeTooltipIndex !== null) {
      window.addEventListener('click', closePopover);
    }
    return () => window.removeEventListener('click', closePopover);
  }, [activeTooltipIndex]);

  const PopOver = ({ index }) => {
    if (index === null) return null;
    return (
      <div
        style={{
          position: 'fixed',
          top: `${popoverPosition.y}px`,
          left: `${popoverPosition.x}px`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="tooltip-item"
          onClick={(e) => handleEditForm(forms[index], index, e, navigate)}
        >
          Edit
        </div>
        <div
          className="tooltip-item"
          onClick={(e) =>
            handleViewDetails(forms[index], index, e, navigate, setActiveTooltipIndex)
          }
        >
          View Details
        </div>
        <div
          className="tooltip-item delete"
          onClick={(e) => handleDeleteForm(index, e, forms, setForms, setActiveTooltipIndex)}
        >
          Delete
        </div>
      </div>
    );
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
              onClick={(event) => handleClick(event, index)}
              style={{ position: 'relative', cursor: 'pointer' }}
            >
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
            <Input
              type="text"
              name="name"
              placeholder="Enter Name "
              onChange={(event) => {
                setNewForm(event.target.value);
              }}
            />
            <Button
              value="Create Form"
              onClick={() => handleFormCreation(newForm, forms, setForms, setIsModal, navigate)}
            />
          </div>
        </div>
      )}

      {activeTooltipIndex && <PopOver index={activeTooltipIndex} />}
    </div>
  );
};

export default Dashboard;
