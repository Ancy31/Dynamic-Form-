import { MdOutlineTextFields, MdDateRange } from 'react-icons/md';
import { GoNumber } from 'react-icons/go';
import { IoIosCheckbox, IoIosRadioButtonOn, IoMdArrowDropdownCircle } from 'react-icons/io';
import { IoTimeSharp } from 'react-icons/io5';
import { FaGripLines, FaFileUpload, FaImage, FaFileAudio, FaFileVideo } from 'react-icons/fa';

export const fields = [
  {
    name: 'Textfield',
    icon: <MdOutlineTextFields />,
  },
  {
    name: 'Number',
    icon: <GoNumber />,
  },
  {
    name: 'Checkbox',
    icon: <IoIosCheckbox />,
  },
  {
    name: 'Radio',
    icon: <IoIosRadioButtonOn />,
  },
  {
    name: 'Dropdown',
    icon: <IoMdArrowDropdownCircle />,
  },
  {
    name: 'Date',
    icon: <MdDateRange />,
  },
  {
    name: 'Multiline',
    icon: <FaGripLines />,
  },
  {
    name: 'FileUpload',
    icon: <FaFileUpload />,
  },
  {
    name: 'Date Time',
    icon: <IoTimeSharp />,
  },
  {
    name: 'Image',
    icon: <FaImage />,
  },
  {
    name: 'Video',
    icon: <FaFileAudio />,
  },
  {
    name: 'Audio',
    icon: <FaFileVideo />,
  },
];

export const handleDrag = (event, index) => {
  event.dataTransfer.setData('text', index);
  console.log('Ancy', index);
};

export const dropItem = (event, setDroppedFields) => {
  event.preventDefault();
  console.log(event);
  const data = event.dataTransfer.getData('text');
  const field = JSON.parse(data);
  const draggableField = fields[field];
  console.log(draggableField.name);
  setDroppedFields((prev) => [...prev, { ...draggableField, id: Date.now() }]);
};
export const allowDrop = (event) => {
  event.preventDefault();
};

export const renderFields = (fieldType) => {
  switch (fieldType) {
    case 'Textfield':
    case 'Number':
    case 'Date':
    case 'Multiline':
    case 'FileUpload':
    case 'Date Time':
    case 'Image':
    case 'Audio':
    case 'Video':
      return (
        <div>
          <input type="text" name={fieldType} placeholder={fieldType} />
        </div>
      );
      break;
    case 'Checkbox':
    case 'Radio':
    case 'Dropdown':
      return (
        <div>
          <input type="text" name={fieldType} placeholder={fieldType} />
          <button
            value=""
            // onClick={() => {
            // }}
          >
            +
          </button>
        </div>
      );  

    default:
      console.log('No Field type Found');
  }
};

export const handleDelete=(index)=>{
  
}