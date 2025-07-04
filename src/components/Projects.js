import styles from '../styles/Projects.module.css';
import projects from '../data/projects';

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      {projects.map((project, index) => (
        <div key={index} className={styles.project}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
