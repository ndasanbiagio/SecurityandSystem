import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    { year: 2017, description: "Descripción de experiencia de 2017" },
    { year: 2018, description: "Descripción de experiencia de 2018" },
    { year: 2019, description: "Descripción de experiencia de 2019" },
    { year: 2020, description: "Descripción de experiencia de 2020" },
    { year: 2021, description: "Descripción de experiencia de 2021" },
    { year: 2022, description: "Descripción de experiencia de 2022" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Experiencia</h2>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {experiences.map((exp) => (
            <div key={exp.year} className={styles.card}>
              <h3>{exp.year}</h3>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
