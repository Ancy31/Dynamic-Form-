import React from 'react';
import '../styles/components/form.scss';
import { fields } from '../constants/form';
import { IconBase } from 'react-icons';
import { MdOutlineTableRows } from 'react-icons/md';

const Form = () => {
  return (
    <div>
      <div className="header">
        <h1>Form Name </h1>
        <div className="button-Container">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>
      <div className="main-container">
        <div className="fields-container">
          {fields?.map((field, index) => {
            return (
              <div className="fields" key={index}>
                <p>{field?.name}</p>
                <span>{field?.icon}
                </span>
              </div>
            );
          })}
        </div>
        <div className="canvas-container"></div>
        <div className="preview-container">
          <div className='mobile-container'>
            <div className='mobile-header'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
