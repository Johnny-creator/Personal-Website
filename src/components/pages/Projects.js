import React, { useState } from "react";
import ProjectModal from "../utility/ProjectModal";
import ProjectContainer from "../utility/ProjectContainer";
import personalPhoto from "./../../images/PersonalPhoto.png";
import{ AnimatePresence } from 'framer-motion';

import classes from "./Projects.module.css";

const Projects = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  }

  const hideModal = () => {
    setModal(false);
  }

  return (
    <main className={classes.body}>
      <ProjectContainer onClick={showModal} name="test1" img={personalPhoto} imgName="Terry"/>
      <ProjectContainer onClick={showModal} name="test2" img={personalPhoto} imgName="Terry"/>
      <ProjectContainer onClick={showModal} name="test3" img={personalPhoto} imgName="Terry"/>
      <ProjectContainer onClick={showModal} name="test4" img={personalPhoto} imgName="Terry"/>
      <ProjectContainer onClick={showModal} name="test5" img={personalPhoto} imgName="Terry"/>
      <AnimatePresence initial={false} mode='wait'>
        {modal && <ProjectModal hide={hideModal} title="This is a test" image={personalPhoto}> Test </ProjectModal>}
      </AnimatePresence>
    </main>
  );
};

export default Projects;
