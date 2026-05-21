import { fields } from '../constants/form';
import { handleDrag } from '../utils/formUtils';

const Field = ({ viewMode }) => {
  return (
    <div className="fields-container">
      {fields?.map((field, index) => {
        return (
          <div
            className="fields"
            key={index}
            draggable={viewMode ? 'false' : 'true'}
            onDragStart={(event) => handleDrag(event, index)}
          >
            <p>{field?.name}</p>
            <span>{field?.icon}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Field;
