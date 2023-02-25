import PropTypes from 'prop-types';

import styles from './imageGalleryItem.module.scss';

const ImageGalleryItems = ({ webformatURL, largeImageURL }) => {
  return (
    <li className={styles.galleryItem}>
      <img className={styles.image} src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItems;

ImageGalleryItems.defaultProps = {
  items: [],
};
