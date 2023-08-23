import React, { useState } from "react";
import ProjectModal from "../utility/ProjectModal";
import ProjectContainer from "../utility/ProjectContainer";
import ModalArray from '../utility/ModalArray';
import{ AnimatePresence, motion } from 'framer-motion';

import classes from "./Projects.module.css";

const Projects = () => {
  const [modal, setModal] = useState({show: false, data: ModalArray[0]});

  const openIndexOne = () => {
    setModal({show: true, data: ModalArray[0]});
  }

  const openIndexTwo = () => {
    setModal({ show: true, data: ModalArray[1]})
  }

  const hideModal = () => {
    setModal({show: false, data: null});
  }

  return (
    <main className={classes.body}>
      <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0 }}>
        <h1> My Projects </h1>
        <div className={classes.projectFlex}>
          <ProjectContainer onClick={openIndexOne} name={ModalArray[0].title} img={ModalArray[0].image} imgAlt={ModalArray[0].alt}/>
          <ProjectContainer onClick={openIndexTwo} name={ModalArray[1].title} img={ModalArray[1].image} imgAlt={ModalArray[1].alt}/>
          <AnimatePresence initial={false} mode='wait'>
            {modal.show && <ProjectModal hide={hideModal} data={modal.data}></ProjectModal>}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
};

export default Projects;
