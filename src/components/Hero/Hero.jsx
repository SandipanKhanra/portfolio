import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Sandipan</h1>
        <p className={styles.description}>
          I&apos;m a Fullstack developer with 2+ years of experience building
          responsive UI and Single-Page Applications in React, Angular and Java.
          Reach out if you&apos;d like to know more!
        </p>
        {/* <a href="mailto:sandipankhanra@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/sandipankhanra/"
            target="_blank"
            className={styles.socialLink}
          >
            <img src={getImageUrl("contact/linkedinIcon.png")} />
          </a>
          <a
            href="https://www.hackerrank.com/profile/lookback"
            className={styles.socialLink}
            target="_blank"
          >
            <img src={getImageUrl("skills/hackerrank.png")} />
          </a>

          <a
            href="https://github.com/SandipanKhanra"
            target="_blank"
            className={styles.socialLink}
          >
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/personalPic.jpg")}
        className={styles.heroImg}
        alt="Hero image of me"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
