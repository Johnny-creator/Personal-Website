import React, { useState } from "react";
import classes from "./Contact.module.css";
import{ motion } from 'framer-motion';
import { useForm } from "react-hook-form";

const Contact = () => {
  const {register, handleSubmit, formState: {errors} } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  }

  return (
    <main className={classes.body}>
      <motion.div className={classes.motion} initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0 }}>

        <form name="contact" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h1> Contact Me! </h1>

          <input type="hidden" name="form-name" value="contact" />

          <label> Name </label>
          {errors.name && <p className={classes.invalid}> Name is required </p>}
          <input {...register("name", {required: true, onChange: () => {setIsSubmitted(false);} })} name="name" type="text"></input>
          
          <label> Email </label>
          {errors.email && <p className={classes.invalid}> Email is required </p>}
          <input {...register("email", { required: true, onChange: () => {setIsSubmitted(false);} })} name="email" type="email"></input>
          
          <label> Message </label>
          {errors.message && <p className={classes.invalid}> Message is required </p>}
          <textarea {...register("message", { required: true, onChange: () => {setIsSubmitted(false);} })} name="message"></textarea>
          
          <button type="submit"> Submit </button>
          {isSubmitted && <p> Form has been submitted </p>}
        </form>

      </motion.div>
    </main>
  );
};

export default Contact;
