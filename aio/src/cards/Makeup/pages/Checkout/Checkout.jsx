import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Checkout.module.css";
import Helmet from "../../components/shared/helmet/Helmet";
import PageTitle from "../../components/shared/pageTitle/PageTitle";
import Container from "../../components/shared/contentContainer/Container";
import FormInput from "../../components/shared/formInput/FormInput";
import { DeliveryValidationSchema } from "./validationSchema";
import { cartActions } from "../../redux/slices/cartSlice"

const Checkout = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const totalAmount = useSelector(state => state.cart.cartTotalAmount);
  const dispatch = useDispatch();

  const [shippingCharge, setShippingCharge] = useState("");

  useEffect(() => {
    dispatch(cartActions.getTotals());

    if (totalAmount <= 500) {
      setShippingCharge(30);
    } else if (totalAmount <= 1000) {
      setShippingCharge(25);
    } else if (totalAmount > 1001) {
      setShippingCharge(0);
    }
  }, [totalAmount, dispatch]);
  
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid }
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

  const onSubmit = (deliveryInfo) => {
    setIsProcessing(true);
    console.log(deliveryInfo);
    localStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo));
    setIsProcessing(false);
    navigate('/payment');
  }
  
  return (
    <Helmet title='Checkout'>
      <PageTitle title="Checkout" />
      <section>
        <Container>
          <div className={styles.checkout}>
            <div className={styles.delivery_details}>
              <h3 className={styles.title}>PLEASE ENTER THE DELIVERY DETAILS</h3>
              <form id="deliveryForm" className={styles.delivery_form} onSubmit={handleSubmit(onSubmit)}>
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
              </form>
            </div>
            <div className={styles.checkout_cart}>
              <div className={styles.checkout_info}>
                <h5 className={styles.subtitle}>Order value</h5>
                <p className={styles.delivery_sum}>$ {totalAmount}</p>
              </div>
              <div className={styles.checkout_info}>
                <h5 className={styles.subtitle}>Shipping</h5>
                <p className={styles.delivery_sum}>{shippingCharge === 0 ? 'Free shipping' : '$'+ shippingCharge}</p>
              </div>
              <div className={`${styles.checkout_info} ${styles.total}`}>
                <h5 className={styles.subtitle}>TOTAL</h5>
                <p className={styles.delivery_sum}>${totalAmount + shippingCharge}</p>
              </div>
              <button type="submit" form="deliveryForm" disabled={!isDirty || !isValid} className={styles.continue_btn}>{isProcessing ? 'Processing...' :'Continue'}</button>
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  );
}

export default Checkout;