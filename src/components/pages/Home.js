import React from "react";

import classes from "./Home.module.css";
import testPhoto from "../../images/PersonalPhoto.png";
import MediaLinks from "../utility/MediaLinks";
import{ AnimatePresence, motion } from 'framer-motion';

const Home = () => {
  return (
  <main className={classes.body}>
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0 }}>
        <h1> Freelance Front-end developer </h1>
        <img className={classes.img} src={testPhoto} alt="Personal Photo" />
        <section className={classes.introduction}>
          <h3> Hi, my name is Jonathan Nanno and welcome to my website</h3>
          <p> I am a Lambton College CPRO graduate who has a focus for front-end web development. My skills however aren't limited solely to front-end
            as I've handled working with databases, creating backends to give sites functionality, deploying sites and giving them their own domains, and a lot more. </p>
          <p> When I'm not studying or polishing up my web dev skills I spend my time playing video games, working out, or planning my diet. </p>
        </section>
      <MediaLinks size="3x" name1="Resume" name2="LinkedIn" name3="Github"/>
    </motion.div>
  </main>
  );
};

export default Home;
