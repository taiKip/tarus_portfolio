
import { useEffect } from 'react'
import { useOnScreen } from '../../hooks/useOnScreen'
import Scroll from '../../UI/Scroll'
import classes from './HomePage.module.css'
const HomePage = () => {
    
  
    return (
        <div className={classes["home-page"]}>
            <div >
            
                <h1 className={classes.header}>Hi , I AM VICTOR TARUS</h1>
            </div>
            <div>
                <h3>I Am A Front-end Web Developer </h3>
            </div>
               
            
               <Scroll/>          
    
        </div>
    )
}

export default HomePage
