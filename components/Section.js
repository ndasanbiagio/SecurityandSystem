import styles from './Section.module.css';

const Section = ({ title, content, isImageLeft, isFirst, imageUrl }) => {
  return (
    <div className={`${styles.container} ${isImageLeft ? styles.imageLeft : ''} ${isFirst ? styles.firstContainer : ''}`}>
      <div className={styles.imageSection}>
        {imageUrl && <img src={imageUrl} alt="Imagen descriptiva" className={styles.image} />}
      </div>
      <div className={styles.textSection}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Section;
