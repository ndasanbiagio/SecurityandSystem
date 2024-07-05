import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#about">Sobre mí</a></li>
        <li className={styles.navItem}><a href="#interests">Intereses</a></li>
        <li className={styles.navItem}><a href="#experience">Experiencia</a></li>
        <li className={styles.navItem}><a href="#contact">Contacto</a></li>
        <li className={styles.navItem}><a href="#schedule">Schedule</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
