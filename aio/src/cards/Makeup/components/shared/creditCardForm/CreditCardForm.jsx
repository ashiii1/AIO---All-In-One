import React, { useEffect } from "react";
import styles from "./CreditCardForm.module.css";
import FormInput from "../formInput/FormInput";
import { formatCardNumber, formatExpiryDate, getCardType } from "../../../assets/utils/utils";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreditCardValidationSchema } from "./validationSchema";

const CreditCardForm = ({ handleFillForm }) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(CreditCardValidationSchema),
    defaultValues: {
      cardNumber: "" ,
      name: "",
      expiryDate: "",
      cvv: "",
    },
    mode: 'onChange'
  });
  
  const currentValues = watch();
  const cardType = getCardType(currentValues.cardNumber);

  useEffect(() => {
    console.log(currentValues);
    handleFillForm(currentValues);
  }, [currentValues ,handleFillForm]);

  return (
    <form className={`${styles.credit_card} ${styles[cardType]}`}>
      <Controller
        name="cardNumber"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormInput
            value={value}
            type={"text"}
            onChange={(e) => onChange(formatCardNumber(e.target.value)) }
            placeholder={"Card Number"}
            errorText={errors.cardNumber?.message}
          />
        )}
      />
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormInput
            value={value}
            onChange={onChange}
            type={"text"}
            placeholder={"Cardholder Name"}
            errorText={errors.name?.message}
          />
        )}
      />
      <div className={styles.form_group}>
        <Controller
          name="expiryDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormInput
              value={value}
              type={"text"}
              onChange={(e) => onChange(formatExpiryDate(e.target.value)) }
              placeholder={"Expiry Date"}
              errorText={errors.expiryDate?.message}
            />
          )}
        />
        <Controller
          name="cvv"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormInput
              value={value}
              onChange={onChange}
              type={"text"}
              placeholder={"CVC"}
              errorText={errors.cvv?.message}
            />
          )}
        />
      </div>
    </form>
  );
};

export default CreditCardForm;