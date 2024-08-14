import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Helmet from "../../../components/shared/helmet/Helmet";
import AccountStarter from "../../../components/shared/starter/AccountStarter";
import FormInput from "../../../components/shared/formInput/FormInput";
import PasswordInput from "../../../components/shared/passwordInput/PasswordInput";
import styles from "./SignUp.module.css";
import { SignUpValidationSchema } from "./validationSchema";
import { boolean } from "yup";
import { authActions } from "../../../redux/slices/authSlice";

const SignUp = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm({
    resolver: yupResolver(SignUpValidationSchema),
    defaultValues: {
      fullName: "" ,
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      streetAddress: "",
      city: "",
      country: "",
      postalCode: "",
      checkbox: boolean,
    },
    mode: 'onChange'
  });

  const onSubmit = (formValue) => {
    setIsProcessing(true);
    dispatch(authActions.register(formValue));
    setIsProcessing(false);
    navigate('/signin');
  }

  return (
    <Helmet title='Sign Up'>
      <section className={styles.signUp_section}>
        <AccountStarter title={'Get started for free'} text={'Create your account to access more'} />
        <div className={styles.signUp_box}>
          <form className={styles.signUp_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form}>
              <h2 className={styles.form_title}>Create your account</h2>
              <div className={styles.form_content}>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field: {value, onChange} }) => (
                    <FormInput
                      value={value}
                      onChange={onChange}
                      title={'Full Name'} 
                      type={'text'} 
                      placeholder={'Jessica Doe'} 
                      errorText={errors.fullName?.message}
                    />
                  )}
                />
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
                  name="phone"
                  control={control}
                  render={({ field: {value, onChange} }) => (
                    <FormInput
                      value={value}
                      onChange={onChange}
                      title={'Phone Number'} 
                      type={'tel'} 
                      placeholder={'008611257945'}
                      errorText={errors.phone?.message}
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
                      placeholder={'Create password'}
                      errorText={errors.password?.message}
                    />
                  )}
                />
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field: {value, onChange} }) => (
                    <PasswordInput
                      value={value}
                      onChange={onChange}
                      title={'Confirm password'} 
                      placeholder={'Confirm password'}
                      errorText={errors.confirmPassword?.message}
                    />
                  )}
                />
                <Controller
                  name="streetAddress"
                  control={control}
                  render={({ field: {value, onChange} }) => (
                    <FormInput
                      value={value}
                      onChange={onChange}
                      title={'Address'} 
                      type={'text'} 
                      placeholder={'road-001, house-115, example area'}
                      errorText={errors.streetAddress?.message}
                    />
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  render={({ field: {value, onChange} }) => (
                    <FormInput
                      value={value}
                      onChange={onChange}
                      title={'City'} 
                      type={'text'} 
                      placeholder={'Your city'}
                      errorText={errors.city?.message}
                    />
                  )}
                />
                <Controller
                  name="country"
                  control={control}
                  render={({ field: {value, onChange} }) => (
                    <FormInput
                      value={value}
                      onChange={onChange}
                      title={'Country'} 
                      type={'text'} 
                      placeholder={'Your country'}
                      errorText={errors.country?.message}
                    />
                  )}
                />
                <Controller
                  name="postalCode"
                  control={control}
                  render={({ field: {value, onChange} }) => (
                    <FormInput
                      value={value}
                      onChange={onChange}
                      title={'Zip/Postal code'} 
                      type={'text'} 
                      placeholder={'Zip/Postal code'}
                      errorText={errors.postalCode?.message}
                    />
                  )}
                />
                <div className={styles.agreement}>
                  <Controller
                    name="checkbox"
                    control={control}
                    render={({ field: {value, onChange} }) => (
                      <input 
                        value={value}
                        onChange={onChange}
                        type="checkbox" 
                        className={styles.agreement_input} 
                        errorText={errors.checkbox?.message}
                      />
                    )}
                  />
                  <p className={styles.agreement_text}> I agree to the FURNI.com{" "}
                    <span className={styles.agreement_terms}>Terms of Service</span> and {" "}
                    <span className={styles.agreement_terms}>Privacy Policy</span>
                  </p>
                </div>
                <button type="submit" disabled={!isDirty || !isValid} className={`${styles.submit_btn} `}>{isProcessing ? 'Processing...' : 'Create account'}</button>
                <div className={styles.create_account}>
                  <span className={styles.create_accountText}>Already have an account?</span>
                  <Link to='/signin' className={styles.create_accountLink}>Sign in</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Helmet>
  );
}

export default SignUp;