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
