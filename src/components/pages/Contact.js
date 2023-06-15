import React, { useState } from "react";
import classes from "./Contact.module.css";
import{ motion } from 'framer-motion';

const Contact = () => {

  return (
    <main className={classes.body}>
      <motion.div className={classes.motion} initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0 }}>
        <form name="contact" className={classes.form}>
          <h1> Contact Me! </h1>
          
          <input type="hidden" name="form-name" value="contact" />
          <label> Name </label>
          <input name="name" type="text"></input>
          
          <label> Email </label>
          <input name="email" type="email"></input>
          
          <label> Message </label>
          <textarea name="message"></textarea>
          
          <button type="submit"> Submit </button>
        </form>
      </motion.div>
    </main>
  );
};

export default Contact;
