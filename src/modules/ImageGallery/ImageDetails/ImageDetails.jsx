import styles from './imageDetails.module.scss';

const ImageDetails = ({ id, largeImageURL, tags }) => {
  return (
    <div className={styles.div}>
      <img className={styles.image} src={largeImageURL} alt={tags} />
    </div>
  );
};
export default ImageDetails;
