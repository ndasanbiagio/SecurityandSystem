import styles from './Interests.module.css';

const Interests = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h2>Intereses</h2>
      </div>
      <div className={styles.textSection}>
        <p>Mi interés por el desarrollo de software va más allá del código; abarca el aprendizaje continuo, la colaboración, la participación en la comunidad y la búsqueda constante de la excelencia profesional</p>
      </div>
      <div className={styles.buttonSection}>
        <a href="https://www.linkedin.com/in/nicolas-dasanbiagio/" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.behance}`}>Linkedin</a>
        <a href="https://github.com/ndasanbiagio" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.dribbble}`}>GitHub</a>
      </div>
    </div>
  );
};

export default Interests;
