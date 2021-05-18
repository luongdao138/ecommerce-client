import React from 'react';
import { Image as CloudImage } from 'cloudinary-react';

const Image = ({ publicId, ...rest }) => {
  return (
    <CloudImage
      cloudName='luongdao'
      publicId={publicId}
      crop='scale'
      {...rest}
    />
  );
};

export default Image;
