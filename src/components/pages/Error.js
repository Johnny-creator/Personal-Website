import React from "react";

import classes from "./Error.module.css";

const Error = () => {
  return (
    <main className={classes.body}>
      <h1>
        Oops, seems like an error occurred! Maybe you put in the wrong URL?
      </h1>
    </main>
  );
};

export default Error;
