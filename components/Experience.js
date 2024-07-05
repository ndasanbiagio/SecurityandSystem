import styles from './Experience.module.css';
import Carousel from '../components/Carousel';

const Experience = () => {
  const experiences = [
    { year: "2016 - 2020", description: "Network Engineer - Telecom Argentina S.A  Córdoba, Argentina" },
    { year: "2020 - 2023", description: "Tutor en CoderHouse (Python) - Argentina" },
    { year: "2020 - 2023", description: "ItxSoftware - Full Stack Developer -  Argentina" },
    { year: 2023, description: "QA Engineer - WonderSoft - Brasil" },
    { year: "2023-Presente" , description: "TaxonomyTech Solutions - Desarrollador en React - Brasil" },
    { year: "2023-Presente" , description: "TaxonomyTech Solutions - Desarrollador de Integraciones Mulesoft - Brasil" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Experiencia</h2>
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
      <Carousel />
    </div>
  );
};

export default Experience;
