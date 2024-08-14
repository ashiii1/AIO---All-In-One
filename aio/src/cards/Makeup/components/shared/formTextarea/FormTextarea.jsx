import styles from "./FormTextarea.module.css";

const FormTextarea = ({ value, placeholder, cols, rows, errorText, onChange }) => {
  return (
    <div className={styles.input_wrapper}>
      <textarea value={value} className={styles.input} placeholder={placeholder} cols={cols} rows={rows} onChange={onChange}/>
      {errorText && errorText !== undefined && <span className={styles.error}>{errorText}</span>}
    </div>
  );
}

export default FormTextarea;