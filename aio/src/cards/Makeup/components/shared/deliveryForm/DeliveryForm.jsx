import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./DeliveryForm.module.css";
import FormInput from "../formInput/FormInput";
import { DeliveryValidationSchema } from "../../../pages/Checkout/validationSchema";

const DeliveryForm = ( {checkHandler} ) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(DeliveryValidationSchema),
    defaultValues: {
      name: "" ,
      email: "",
      phone: "",
      streetAddress: "",
      city: "",
      country: "",
      postalCode: "",
    },
    mode: 'onChange'
  });

  useEffect(() => {
    const deliveryInfo = JSON.parse(localStorage.getItem('deliveryInfo'));

    if(deliveryInfo) {
      setValue('name', deliveryInfo.name);
      setValue('email', deliveryInfo.email);
      setValue('phone', deliveryInfo.phone);
      setValue('streetAddress', deliveryInfo.streetAddress);
      setValue('city', deliveryInfo.city);
      setValue('country', deliveryInfo.country);
      setValue('postalCode', deliveryInfo.postalCode);
    }
  }, [setValue]);

  const handleClick = () => {
    checkHandler();
    console.log('hide');
  }

  const onSubmit = (deliveryInfo) => {
    setIsProcessing(true);
    console.log(deliveryInfo);
    localStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo));
    setIsProcessing(false);
    checkHandler();
  }
  
  return (
    <form className={styles.delivery_form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field: {value, onChange} }) => (
          <FormInput
            value={value}
            onChange={onChange}
            type={'text'}
            placeholder={'Enter your name'} 
            errorText={errors.name?.message}
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
            type={'email'}
            placeholder={'Enter your email'}
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
            type={'tel'} 
            placeholder={'Phone number'}
            errorText={errors.phone?.message}
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
            type={'text'} 
            placeholder={'Street address'}
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
            type={'text'} 
            placeholder={'City'}
            errorText={errors.city?.message}
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
            type={'text'} 
            placeholder={'Postal code'}
            errorText={errors.postalCode?.message}
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
            type={'text'} 
            placeholder={'Country'}
            errorText={errors.country?.message}
          />
        )}
      />
      <div className={styles.btn_box}>
        <button type="button" className={`${styles.btn} ${styles.cansel_btn}`} onClick={handleClick}>Cansel</button>
        <button type="submit" className={`${styles.btn} ${styles.continue_btn}`}>{isProcessing ? 'Processing...' : 'Continue'}</button>
      </div>
    </form>
  );
}

export default DeliveryForm;