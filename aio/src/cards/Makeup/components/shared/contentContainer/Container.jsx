import styles from './Container.module.css'

const Container = ({ children }) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
};

export default Container;