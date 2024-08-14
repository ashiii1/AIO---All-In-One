import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import styles from "./PasswordInput.module.css";

const PasswordInput = ({title, value, placeholder, errorText, onChange}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.input_wrapper}>
      <div className={styles.input_password}>
        <label htmlFor={title} className={styles.label}>{title}</label>
        <input type={showPassword ? 'text' : 'password'} id={title} value={value} className={styles.input} placeholder={placeholder} autoComplete="new-password" onChange={onChange}/>
        <span onClick={() => setShowPassword(!showPassword)} className={styles.eye}>{showPassword ? <RiEyeLine/> : <RiEyeOffLine/> }</span>
      </div>
      {errorText && errorText !== undefined && <span className={styles.error}>{errorText}</span>}
    </div>
  );
}

export default PasswordInput;