import githubIcon from '../icons/icon_github.svg';
import linkedinIcon from '../icons/icon_linkedin.svg';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <aside className={styles.navbar}>
      <h1 className={styles.name}><a href="/">Maetel Son</a></h1>
      <h2 className={styles.title}>Front End Engineer</h2>
      <p className={styles.sub}>I build accessible, pixel-perfect digital experiences for the web.</p>

      <nav className={styles.navMenu}>
        <a href="#about" className={styles.link}>ABOUT</a>
        <a href="#experience" className={styles.link}>EXPERIENCE</a>
        <a href="#projects" className={styles.link}>PROJECTS</a>
      </nav>

      <div className={styles.socialIcons}>
        <a href="https://github.com/meth-al" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/손하늘--47060032a" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
        </a>
      </div>
    </aside>
  );
}

export default Navbar;
