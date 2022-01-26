import React from 'react';
import { MainContent } from './NasaContent.styles';

const NasaContent = ({ url, type }) => {
  return (
    <MainContent>
      {
        type === 'video' && <iframe src={url} title="Video player" />
      }
       {
        type === 'image' && <img src={url}  alt="content of the day" />
      }
    </MainContent>
  );
}

export default NasaContent;
