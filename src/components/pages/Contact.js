import react from "react";
import classes from "./Contact.module.css";

const Contact = (props) => {
  return (
    <main className={classes.body}>
      <form className={classes.form}>
        <h1> Contact Me! </h1>
        <label> Name </label>
        <input type="text"></input>

        <label> Email </label>
        <input type="text"></input>

        <label> Message </label>
        <textarea></textarea>
        <button type="submit"> Submit </button>
      </form>
    </main>
  );
};

export default Contact;
