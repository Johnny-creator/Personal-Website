import React from "react";
import classes from "./Contact.module.css";
import{ motion } from 'framer-motion';
import { useForm } from "react-hook-form";

const Contact = () => {
  const {register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <main className={classes.body}>
      <motion.div className={classes.motion} initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0 }}>

        <form name="contact" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h1> Contact Me! </h1>

          <input type="hidden" name="form-name" value="contact" />

          <label> Name </label>
          {errors.name && <p className={classes.invalid}> Name is required </p>}
          <input {...register("name", {required: true })} name="name" type="text"></input>
          
          <label> Email </label>
          {errors.email && <p className={classes.invalid}> Email is required </p>}
          <input {...register("email", { required: true })} name="email" type="email"></input>
          
          <label> Message </label>
          {errors.message && <p className={classes.invalid}> Message is required </p>}
          <textarea {...register("message", { required: true })} name="message"></textarea>
          
          <button type="submit"> Submit </button>
        </form>

      </motion.div>
    </main>
  );
};

export default Contact;
