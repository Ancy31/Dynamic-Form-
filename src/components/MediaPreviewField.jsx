import React from 'react';

const MediaPreviewField = ({ field }) => {
  const type = field.name;
  const mediaUrl = field.mediaUrl;

  const defaultImage = 'https://dummyimage.com/400x250/e0e0e0/555555&text=Dummy+Image';
  const defaultVideo = 'https://www.w3schools.com/html/mov_bbb.mp4';
  const defaultAudio = 'https://www.w3schools.com/html/horse.mp3';

  switch (type) {
    case 'Image':
      return (
        <img 
          src={mediaUrl || defaultImage} 
          alt="Preview" 
          style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #d1d5db' }} 
        />
      );
    case 'Video':
      return (
        <video 
          src={mediaUrl || defaultVideo} 
          controls 
          style={{ width: '100%', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: '#000' }} 
        />
      );
    case 'Audio':
      return (
        <audio 
          src={mediaUrl || defaultAudio} 
          controls 
          style={{ width: '100%', outline: 'none' }} 
        />
      );
    default:
      return null;
  }
};

export default MediaPreviewField;
