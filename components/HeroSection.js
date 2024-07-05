import styles from './HeroSection.module.css';

const HeroSection = ({ imageUrl, title, subtitle, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <p>Image from Freepik</p>
      </div>
      <div className={styles.imageSection}>
        <img src={imageUrl} alt="Imagen descriptiva" className={styles.image} />
      </div>
    </div>
  );
};

export default HeroSection;
