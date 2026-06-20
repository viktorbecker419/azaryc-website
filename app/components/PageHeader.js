import styles from './PageHeader.module.css';

export default function PageHeader({ eyebrow, title }) {
  return (
    <header className={styles.header}>
      <div className="container">
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
      </div>
    </header>
  );
}
