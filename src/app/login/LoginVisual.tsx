import styles from './LoginShell.module.css';

/** The framed landscape with the dashboard resting inside it. Decorative only. */
export function LoginVisual() {
  return (
    <div className={styles.frame} aria-hidden="true">
      <div className={styles.photo} />
      <div className={styles.shot}>
        <img
          className={styles.shotLight}
          src="/images/login/dashboard-light.webp"
          alt=""
          width={1600}
          height={900}
          decoding="async"
        />
        <img
          className={styles.shotDark}
          src="/images/login/dashboard-dark.webp"
          alt=""
          width={1600}
          height={900}
          decoding="async"
        />
      </div>
    </div>
  );
}
