import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiPhoneFill, RiMailFill, RiMapPin2Fill } from "@remixicon/react";
import styles from "./Contact.module.css";
import Helmet from "../../components/shared/helmet/Helmet";
import PageTitle from "../../components/shared/pageTitle/PageTitle";
import Container from "../../components/shared/contentContainer/Container";
import FormInput from "../../components/shared/formInput/FormInput";
import FormTextarea from "../../components/shared/formTextarea/FormTextarea";
import { ContactValidationSchema } from "./validationSchema";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm({
    resolver: yupResolver(ContactValidationSchema),
    defaultValues: {
      name: "" ,
      email: "",
      phone: "",
      textQuestion: "",
    },
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    setIsProcessing(true);
    console.log(data);
    setIsProcessing(false);
    setSuccess(true);
  }

  return (
    <Helmet title="Contact">
      <PageTitle title="Contact" />
      <section>
        <Container>
          <div className={styles.grid_container}>
            {
              success ? (
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={styles.success}
                >
                  <p className={styles.success_text}>Your message has been successfully sent!</p>
                  <p className={styles.success_text}>Expect a call from our custom service manager</p>
                </motion.div>
              ) : (
                <div className={styles.grid_inner}>
                  <p className={styles.contact_text}>Whether you have a question about your order or other questions, we’re happy to help.</p>
                  <div className={styles.contact_ways}>
                    <p>You can always contact us: </p>
                    <Link to="tel:9876543210"><span><RiPhoneFill/></span></Link>
                    <p>or leave a request here by filling out the form below.</p>
                  </div>
                  <div>
                    <form className={styles.contact_form} onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field: {value, onChange} }) => (
                          <FormInput
                            value={value}
                            onChange={onChange}
                            type={'text'} 
                            placeholder={'Stephanie Mayer'} 
                            errorText={errors.name?.message}
                          />
                        )}
                      />
                      <div className={styles.form_input}>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field: {value, onChange} }) => (
                            <FormInput
                              value={value}
                              onChange={onChange}
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
                              type={'tel'} 
                              placeholder={'Phone'} 
                              errorText={errors.phone?.message}
                            />
                          )}
                        />
                      </div>
                      <Controller
                        name="textQuestion"
                        control={control}
                        render={({ field: {value, onChange} }) => (
                          <FormTextarea
                            value={value}
                            onChange={onChange}
                            placeholder={'Discribe your question'} 
                            cols={30} 
                            rows={5}
                            errorText={errors.textQuestion?.message}
                          />
                        )}
                      />
                      <div>
                        <button type="submit" disabled={!isDirty || !isValid} className={styles.submit_btn}>{isProcessing ? 'Обробка запиту...' :'Send'}</button>
                      </div>
                    </form>
                  </div>
                </div>
              )
            }
            <div className={styles.contacts_box}>
              <ul className={styles.contacts}>
                <li className={styles.contacts_item}>
                  <span className={styles.contacts_icon}><RiMapPin2Fill/></span>
                  <p className={styles.contacts_link}>5100 Youngblood Rd, Dallas, USA</p>
                </li>
                <li className={styles.contacts_item}>
                  <span className={styles.contacts_icon}><RiMailFill/></span>
                  <Link to="mailto:info@furni.com" className={styles.contacts_link}>info@furni.com</Link>
                </li>
                <li className={styles.contacts_item}>
                  <span className={styles.contacts_icon}><RiPhoneFill/></span>
                  <Link to="tel:9876543210" className={styles.contacts_link}>9876543210</Link>
                </li>
              </ul>
              <div className={styles.contact_work}>
                <p className={styles.work}>Mon - Fri: <span className={styles.work_hours}>8:00 am - 8:00 pm</span></p>
                <p className={styles.work}>Sat - Sun: <span className={styles.work_hours}>10:00 am - 6:00 pm</span></p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  );
}

export default Contact;