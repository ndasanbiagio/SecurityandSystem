import styles from './HeroSection.module.css';

const HeroSection = ({ imageUrl, title, subtitle, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title} style={{ textAlign: 'center', fontFamily: 'Ubuntu, sans-serif' }}>{title}</h1>
        <h2 className={styles.subtitle} style={{ color: '#bdd03a', fontFamily: 'Ubuntu, sans-serif' }}>{subtitle}</h2>
        <p className={styles.description} style={{ fontFamily: 'Ubuntu, sans-serif', color: '#3399cc' }}>{description}</p>
      </div>
      <div className={styles.imageSection}>
        <img src={imageUrl} alt="Imagen descriptiva" className={styles.image} />
      </div>
    </div>
  );
};

export default HeroSection;
