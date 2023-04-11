import React from "react";

import classes from "./About.module.css";

const About = () => {
  return (
    <main className={classes.body}>
      <div className={classes.container}>
        <h1> My name is Jonathan Nanno </h1>
    
        <p> I started into the world of programming when I was 13/14 as I took a Computer Science course in my highschool </p>
    
        <p> From there, I learnt about the basics of programming using an object-based educational program called Alice. My learning moved on and once we got ahold of the basics we were taught using Turing and Microsoft Visual Basic. In the final year, we got to handle working with Java. </p>
    
        <p> I played around with other languages (mostly with Python due to the amount of resources available) but wasn't too sure what I wanted to hone my skills in. It wasn't until I took Lambton College's CPRO program that I discovered my enjoyment of web development. The course went over the basics of the internet as well as HTML, CSS, and JavaScript (The course covered deeper topics such as MVC's, SQL, databases, MERN stack). Over the duration of the course, I gained a deeper understanding of front-end development and wanted to further my knowledge with popular frameworks and libraries. </p>
    
        <p> After graduation, I've spent my freetime creating and deploying websites as a free-lance developer. I've also looked into game development in C# using a framework called 'Monogame'.</p>
      </div>
    </main>
  );
};

export default About;
