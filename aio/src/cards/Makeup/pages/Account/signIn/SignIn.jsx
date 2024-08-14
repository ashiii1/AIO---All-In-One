import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../../../components/shared/helmet/Helmet";
import AccountStarter from "../../../components/shared/starter/AccountStarter";
import FormInput from "../../../components/shared/formInput/FormInput";
import PasswordInput from "../../../components/shared/passwordInput/PasswordInput";
import styles from "./SignIn.module.css";
import {SignInValidationSchema } from "./validationSchema";
import { authActions } from "../../../redux/slices/authSlice";

const SignIn = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignInValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: 'onChange'
  });

  const onSubmit = (formValue) => {
    const {email, password} = formValue;
    const userInfo = JSON.parse(localStorage.getItem("user"));
    
    setIsProcessing(true);
    
    if (userInfo == null) {
      setMessage("You don't have an account yet");
      setIsProcessing(false);
      return;
    };

    if (email === userInfo.email || password === userInfo.password) {
      dispatch(authActions.login());
      setIsProcessing(false);
      navigate('/');
    } else {
      setMessage('Wrong email or password');
      setIsProcessing(false);
    };
  }

  return (
    <Helmet title='Sign In'>
      <section className={styles.signIn_section}>
        <AccountStarter title={'Stay sign in for more'} text={'When you sign in, you are with us!'} />
        <div className={styles.signIn_box}>
          <form className={styles.signIn_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form}>
              <h2 className={styles.form_title}>Sign In</h2>
              <div className={styles.form_content}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: {value, onChange} }) => (
                    <FormInput
                      value={value}
                      onChange={onChange}
                      title={'Email'} 
                      type={'email'} 
                      placeholder={'example@email.com'}
                      errorText={errors.email?.message}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field: {value, onChange} }) => (
                    <PasswordInput 
                      value={value}
                      onChange={onChange}
                      title={'Password'}
                      placeholder={'Your password'}
                      errorText={errors.password?.message}
                    />
                  )}
                />
                {message && <span className={styles.error}>{message}</span>}
                <button type="submit" className={styles.submit_btn}>{isProcessing ? 'Processing...' : 'Sign In'}</button>
                <div className={styles.create_account}>
                  <span className={styles.create_accountText}>Don't have an Account?</span>
                  <Link to='/signup' className={styles.create_accountLink}>Sign up</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Helmet>
    
  );
}

export default SignIn;