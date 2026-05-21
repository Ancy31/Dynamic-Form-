import hero from '../assets/hero.jfif';

const MediaPreviewField = ({ field }) => {
  const type = field.name;
  const mediaUrl = field.mediaUrl;

  const defaultVideo = '';
  const defaultAudio = '';

  switch (type) {
    case 'Image':
      return <img src={mediaUrl || hero} alt="Preview" style={{ width: '100%' }} />;
    case 'Video':
      return <video src={mediaUrl || defaultVideo} controls />;
    case 'Audio':
      return <audio src={mediaUrl || defaultAudio} controls />;
    default:
      return null;
  }
};

export default MediaPreviewField;
