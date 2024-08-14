import styles from "./FormInput.module.css";

const FormInput = ({title, type, value, placeholder, errorText, onChange, ...rest}) => {

  return (
    <div className={styles.input_wrapper}>
      {title ? 
        <label htmlFor={title} className={styles.label}>{title}</label> 
        :
        ''
      }
      <input type={type} id={title} value={value} className={styles.input} placeholder={placeholder} onChange={onChange} {...rest} autoComplete="new-off"/>
      {errorText && errorText !== undefined && <span className={styles.error}>{errorText}</span>}
    </div>
  );
}

export default FormInput;