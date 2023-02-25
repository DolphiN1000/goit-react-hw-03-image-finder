import PropTypes from 'prop-types';
import ImageGalleryItems from './ImageGalleryItem/ImageGalleryItem';

import styles from './imageGallery.module.scss';

const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ImageGalleryItems
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
    
      />
    );
  });

  return <ul className={styles.gallery}>{elements}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
