import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("projects/project.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Profile icon" />
            <div className={styles.aboutItemText}>
              <h3>Product-minded Fullstack Engineer</h3>
              <p>
                Concise, impact-focused experience across frontend and
                backend—delivering fast, accessible React interfaces and
                reliable backend systems for scalable production services.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Skills icon" />
            <div className={styles.aboutItemText}>
              <h3>Core Strengths</h3>
              <p>
                <strong>Frontend:</strong> React, performance optimization,
                Redux Toolkit, responsive & accessible UIs.
              </p>
              <p>
                <strong>Backend:</strong> REST APIs, microservices patterns
                (circuit breaker), message queuing, scheduled jobs, and
                logging/observability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
