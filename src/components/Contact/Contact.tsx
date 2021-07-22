import classes from './Contact.module.css'
import smile from '../../assets/smile.png'

const Contact = () => {
    return (
        <div className={classes.contact}>
           
                   
           
            <div className={classes.prompt}>
                <div>
                    <h3>Contact</h3>
                </div>

                <div className={classes.smiley}>
                    <img src={smile} alt="smiley face" />
                </div>
            </div>
            <div className={classes.links}>
                <a href="mailto:victortarus6@gmail.com" target="_blank" rel="noreferrer">Send me an email</a>
                <a href="tel:+358465814224">Call Me</a>
                <a href="https://github.com/taiKip?tab=repositories" target="_blank"  rel="noreferrer">More of my works</a>
           </div>
        </div>
    )
}

export default Contact
