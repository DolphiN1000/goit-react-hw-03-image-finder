import PropTypes from 'prop-types';

import styles from './imageGalleryItem.module.scss';

const ImageGalleryItems = ({ webformatURL, largeImageURL, tags, showImage}) => {
  return (
    <li onClick={()=> {showImage({largeImageURL, tags})}}className={styles.galleryItem}>
      <img className={styles.image} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItems;

ImageGalleryItems.defaultProps = {
  items: [],
};
