import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export const NotFound = () => {
  const navigate = useNavigate();

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
        <Button
          value=" Go Back"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
    </div>
  );
};
