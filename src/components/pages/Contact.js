import react, { useState } from "react";
import classes from "./Contact.module.css";
import{ AnimatePresence, motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameIsValid, setNameIsValid]  = useState(true);
  const [emailIsValid, setEmailIsValid]  = useState(true);
  const [messageIsValid, setMessageIsValid]  = useState(true);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  }

  const submitForm = (event) => {
    event.preventDefault();

    if (name.trim().length === 0) {
      setNameIsValid(false);
      console.log("False");
    }

    if (email.trim().length === 0) {
      setEmailIsValid(false);
    }

    if (message.trim().length === 0) {
      setMessageIsValid(false);
    }

    if (!nameIsValid || !emailIsValid || !messageIsValid) {
      return;
    }
    
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className={classes.body}>
      <motion.div className={classes.motion} initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0 }}>
        <form className={classes.form} onSubmit={submitForm}>
          <h1> Contact Me! </h1>
          <label> Name </label>
          {!nameIsValid && <p className={classes.invalid}> Name is not valid </p>}
          <input type="text" onChange={nameChangeHandler} value={name}></input>

          <label> Email </label>
          {!emailIsValid && <p  className={classes.invalid}> Email is not valid </p>}
          <input type="email" onChange={emailChangeHandler} value={email}></input>

          <label> Message </label>
          {!messageIsValid && <p className={classes.invalid}> Message is not valid </p>}
          <textarea onChange={messageChangeHandler} value={message}></textarea>
          <button type="submit"> Submit </button>
        </form>
      </motion.div>
    </main>
  );
};

export default Contact;
