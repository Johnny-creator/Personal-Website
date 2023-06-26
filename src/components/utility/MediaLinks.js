import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import pdf from '../../files/Jonathan Nanno Online Resume.pdf'

import classes from "./MediaLinks.module.css";

const MediaLinks = (props) => {
  return (
    <>
      <div className={classes.container}>
        <a className={classes.icon}
          href={pdf} 
          target="_blank" 
          rel="noreferrer"
        >
          {<FontAwesomeIcon icon={faFile} size={props.size} />}
          <span>{props.name1}</span>
        </a>
        <a
          className={classes.icon}
          href="https://www.linkedin.com/in/jonathan-n-3698091b7/"
          target="_blank"
          rel="noreferrer"
        >
          {<FontAwesomeIcon icon={faLinkedin} size={props.size} />}
          <span>{props.name2}</span>
        </a>
        <a
          className={classes.icon}
          href="https://github.com/Johnny-creator"
          target="_blank"
          rel="noreferrer"
        >
          {<FontAwesomeIcon icon={faGithub} size={props.size} />}
          <span>{props.name3}</span>
        </a>
      </div>
    </>
  );
};

export default MediaLinks;
