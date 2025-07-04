import React from 'react';
import styles from '../styles/Experience.module.css';
import experiences from '../data/experiences';

function Experience() {
  return (
    <section id="experience" className={styles.section}>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.job}>
          <h3>{exp.company} · {exp.role}</h3>
          <span>{exp.period}</span>
          <p>{exp.description}</p>
          <div className={styles.tags}>
            {exp.skills.map((skill, idx) => (
              <span key={idx} className={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
