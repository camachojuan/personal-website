import styles from "./whoIsThisGuy.module.css";

const WhoIsThisGuy = () => {
  return (
    <div className={styles.container}>
      <img src="/images/profile-picture.png" />
      <div className={styles.question}>Who's this guy?</div>
      <div className={styles.description}>
        I'm a Full-stack web developer with more than 10 years of experience based in Montevideo, Uruguay
        (GMT-3). I have a serious passion for fast load times, easy to use UI/UX and delivering the most value
        to users.
      </div>
    </div>
  );
};

export default WhoIsThisGuy;
