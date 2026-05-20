import React from 'react';

const Button = ({ onClick, value = 'submit' }) => {
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

export default Button;
