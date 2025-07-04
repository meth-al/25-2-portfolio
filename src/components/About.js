import styles from '../styles/About.module.css';

function About() {
  return (
    <section id="about" className={styles.section}>
      <p>
        I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering.
      </p>
      <p>
        Currently, I'm a Senior Front-End Engineer at <strong>Klaviyo</strong>, specializing in accessibility...
      </p>
      <p>
        In my spare time, I’m usually climbing, reading, or running around Hyrule searching for <span className={styles.korok}>Korok seeds</span>.
      </p>
    </section>
  );
}

export default About;
