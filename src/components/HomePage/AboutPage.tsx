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
         I am software developer with a passion for developing simple software solutions that improve the lives of those around me
        </span>
       
                  <Skills />
                 
     <h4>Scroll down to see some of my works</h4>
              <Scroll />
          </div>
        

  );
});

export default AboutPage;
