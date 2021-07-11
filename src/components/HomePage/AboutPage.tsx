import React from "react";
import Scroll from "../../UI/Scroll";
import classes from "./AboutPage.module.css";
import Skills from "./Skills";
export type Ref = HTMLDivElement;
export type Props = { inView: boolean };
const AboutPage = React.forwardRef<Ref, Props>((props, ref) => {
  let styles = `${classes.about}  ${props.inView ? classes.animate : ""}`;

  return (
      <div className={styles} ref={ref}>
      
        <h1>ABOUT</h1>

        <span>
          I am a graduate of IT engineering from Centria University Of Applied
          Sciences.What drew me to love software development honestly is the
          roller coaster feeling it brings.Its not hard but complex,coupled with
          the hope of, "I know I am going to figure out the solution and always
          ending up figuring it out"
        </span>
       
                  <Skills />
                 
     <h4>Scroll down to see some of my works</h4>
              <Scroll />
          </div>
        

  );
});

export default AboutPage;
