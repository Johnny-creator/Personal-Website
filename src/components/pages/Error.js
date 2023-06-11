import React from "react";

import classes from "./Error.module.css";
import{ AnimatePresence, motion } from 'framer-motion';

const Error = () => {
  return (
    <main className={classes.body}>
      <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0 }}>
        <h1>
          Oops, seems like an error occurred! Maybe you put in the wrong URL?
        </h1>
      </motion.div>
    </main>
  );
};

export default Error;
