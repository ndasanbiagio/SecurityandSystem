import styles from './MainContent.module.css';

const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src="/profile.jpg" alt="Imagen descriptiva" className={styles.image}/>
      </div>
      <div className={styles.textSection}>
        <h1>Título Principal</h1>
        <p>Este es un párrafo de ejemplo que describe algo importante relacionado con la imagen de la izquierda. Aquí puedes añadir más texto para hacer la sección más descriptiva.</p>
      </div>
    </div>
  );
};

export default MainContent;
