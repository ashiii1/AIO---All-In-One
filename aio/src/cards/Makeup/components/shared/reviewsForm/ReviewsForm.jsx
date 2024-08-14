import React, { useState } from "react";
import styles from "./ReviewsForm.module.css";
import { RiStarFill} from "@remixicon/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import FormInput from "../formInput/FormInput";
import FormTextarea from "../formTextarea/FormTextarea";
import { ReviewsValidationSchema } from "./validationSchema";

const ReviewsForm = ({ addReview }) => {
  const [stars, setStars] = useState([
    { id: 1, checked: false, hovered: false },
    { id: 2, checked: false, hovered: false },
    { id: 3, checked: false, hovered: false },
    { id: 4, checked: false, hovered: false },
    { id: 5, checked: false, hovered: false },
  ]);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(ReviewsValidationSchema),
    defaultValues: {
      name: "",
      rating: "",
      comment: "",
    },
    mode: 'onChange'
  });

  const handleCheck = (id) => {
    setValue("rating", id);
    setStars((prev) =>
      prev.map((star) => {
        if (star.id <= id) {
          return { ...star, checked: true };
        }
        return { ...star, checked: false };
      })
    );
  };
  
  const handleHovered = (id) => {
    setStars((prev) =>
      prev.map((star) => {
        if (id) {
          return star.id <= id ? { ...star, hovered: true } : star;
        }
        return { ...star, hovered: false };
      })
    );
  };

  const onSubmit = (data) => {
    reset();
    const {name, rating, comment} = data;
    
    addReview(name, comment, rating);
    console.log(data)
    toast.success('Review added successfully');
    setStars((prev) =>
      prev.map((star) => {
        return { ...star, checked: false };
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form_input}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormInput
              value={value}
              onChange={onChange}
              type="text"
              placeholder="Enter name"
              name="name"
              errorText={errors.name?.message}
            />
          )}
        />
      </div>
      <div className={`${styles.form_input} ${styles.form_inputRate}`}>
        <div className={styles.stars}>
          {stars.map((star) => (
            <div
              key={star.id}
              onMouseEnter={() => {
                handleHovered(star.id);
              }}
              onMouseLeave={() => {
                handleHovered();
              }}
              onClick={() => {
                handleCheck(star.id);
              }}
            >
              <RiStarFill
                size={25}
                strokeWidth={0}
                fill={star.checked || star.hovered ? "#ffc107" : "#e4e5e9"}
                cursor="pointer"
              />
            </div>
          ))}
        </div>
        {errors?.rating?.message && (
          <div className={styles.error}>Please assign a star rating to validate your review.</div>
        )}
      </div>
      <div className={styles.form_input}>
        <Controller
            name="comment"
            control={control}
            render={({ field: { onChange, value } }) => (
            <FormTextarea 
              rows={4} 
              type="text"
              value={value}
              onChange={onChange}
              name="comment"
              placeholder="Review message"
              errorText={errors.comment?.message}
            />
          )}
        />
      </div>
      
      <motion.button whileTap={{scale: 1.2}} type="submit" className={styles.review_btn}>Leave review</motion.button>
    </form>
  );
}

export default ReviewsForm;