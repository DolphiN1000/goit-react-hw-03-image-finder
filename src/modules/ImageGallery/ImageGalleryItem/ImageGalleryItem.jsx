import PropTypes from 'prop-types';

import styles from './imageGalleryItem.module.scss';

const ImageGalleryItems = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <li className={styles.galleryItem}>
      <img className={styles.image} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItems;

ImageGalleryItems.defaultProps = {
  items: [],
};
