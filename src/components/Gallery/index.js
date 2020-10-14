import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import ReactBnbGallery from 'react-bnb-gallery';
import { Link } from 'react-router-dom';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../pieces', false, /\.(png|jpe?g|gif)$/));

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link to="/">
        <Button id="backButt" icon="arrow alternate circle left outline" circular size="massive" />
      </Link>
      <Button id="galleryButt" onClick={() => setIsOpen(true)}>
        Open gallery
      </Button>
      <ReactBnbGallery
        show={isOpen}
        photos={images}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

