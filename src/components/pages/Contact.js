import react, { useState } from "react";
import classes from "./Contact.module.css";
import{ motion } from 'framer-motion';

const Contact = () => {
  const initialState = {name: "", email: "", message: ""};
  const [formValues, setFormValues] = useState({initialState});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Name is required."
    }

    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format (Did you forget @, or .com?)";
    }

    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  }


  return (
    <main className={classes.body}>
      <motion.div className={classes.motion} initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0 }}>
        <form name="contact" className={classes.form} onSubmit={handleSubmit}>
          <h1> Contact Me! </h1>
          
          <input type="hidden" name="form-name" value="contact" />
          <label> Name </label>
          <p className={classes.invalid}> {formErrors.name} </p>
          <input name="name" type="text" onChange={handleChange}></input>
          
          <label> Email </label>
          <p className={classes.invalid}> {formErrors.email} </p>
          <input name="email" type="email" onChange={handleChange}></input>
          
          <label> Message </label>
          <p className={classes.invalid}> {formErrors.message} </p>
          <textarea name="message" onChange={handleChange}></textarea>
          
          <button type="submit"> Submit </button>
        </form>
        {Object.keys(formErrors).length === 0 && isSubmit ? <p> Submitted Successfully</p> : "" }
      </motion.div>
    </main>
  );
};

export default Contact;
