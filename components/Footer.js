import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} ndasanbiagio@gmail.com - +55 (47) 99156-6856 . Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
