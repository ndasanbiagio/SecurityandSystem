import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#sobre-mi">Sobre mí</a></li>
        <li className={styles.navItem}><a href="#intereses">Intereses</a></li>
        <li className={styles.navItem}><a href="#experiencia">Experiencia</a></li>
        <li className={styles.navItem}><a href="#contacto">Contacto</a></li>
        <li className={`${styles.navItem} ${styles.scheduleButton}`}>
          <a href="https://calendly.com/ndasanbiagio" target="_blank" rel="noopener noreferrer">Schedule</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
