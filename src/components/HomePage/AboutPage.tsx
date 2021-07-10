import React from 'react'
import classes from './HomePage.module.css'
import Skills from './Skills'
export type Ref = HTMLDivElement
export type Props = {inView:boolean}
const AboutPage = React.forwardRef<Ref, Props>((props, ref) => {
    let styles = `${classes.about}  ${props.inView?classes.animate:""}`


    return (
        <div className={classes["home-page"]} ref={ref} >
           
           <div className={styles}>
                <h1 >ABOUT</h1>
                <span>I am  a graduate of IT engineering from Centria University Of Applied Sciences.</span>
                <span>What drew me to love software development honestly is the roller coaster feeling it brings.Its not hard but complex,coupled with the hope of,<article>
                    "I know I am going to figure out the solution and always ending up figuring it out"</article></span>
                <div>
                    <Skills/>
                </div>
                <h2>Scroll down to see some of my works</h2>
  </div>
        </div>
    )
})

export default AboutPage
