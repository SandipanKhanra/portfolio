import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Sandipan</h1>
        <p className={styles.description}>
          I&apos;m a frontend developer with 2+ years of experience in React.
          Reach out if you&apos;d like to know more!
        </p>
        <a href="mailto:sandipankhanra@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        className={styles.heroImg}
        alt="Hero image of me"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
