import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import classes from './MediaLinks.module.css';

const MediaLinks = (props) => {
    return <>
        <a className={classes.icon} href="/" target="_blank" rel="noreferrer"> {<FontAwesomeIcon icon={faFile} size={props.size} />} </a>
        <a className={classes.icon} href="https://www.linkedin.com/in/jonathan-n-3698091b7/" target="_blank" rel="noreferrer"> {<FontAwesomeIcon icon={faLinkedin} size={props.size} />} </a>
        <a className={classes.icon} href="https://github.com/Johnny-creator" target="_blank" rel="noreferrer"> {<FontAwesomeIcon icon={faGithub} size={props.size} />} </a>
    </>
}

export default MediaLinks;