import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Page Not Found</h2>
        <p>
          If this is your site, and you weren’t expecting a 404 for this path, please visit
          Netlify’s
        </p>
        <hr />
        <p>
          Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site.
        </p>
        <button
          onClick={() => {
            setIsModal(false);
            navigate(-1);
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
