import Image from 'next/image';
import styles from './Header.module.css';

const Header = ({ name, profileImage }) => (
  <header className={styles.header}>
    <Image src={profileImage} alt={`${name}'s profile picture`} width={100} height={100} className={styles.profileImage} />
    <h1 className={styles.name}>{name}</h1>
  </header>
);

export default Header;
