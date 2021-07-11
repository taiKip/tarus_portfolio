import { useEffect }from 'react'
import { IPage } from '../../interfaces/IPage'
import classes from './DescriptionPage.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import link from '../../assets/link.svg'
const DescriptionPage = ({ item }: { item: IPage }) => {
    

    return (
        <div className={classes["app-specs"]}>
            <h1>{item.id.toUpperCase()}</h1>
            <h3>{item.about}</h3>
            <ul className={classes.links}>
                <li >
                    <a href={item.github} target="_blank" >
                        <GitHubIcon style={{color:"black",width:"90%",height:"90%"}}/>
                    </a>
                </li>
                <li>
                    <a href={item.websiteLink} target="_blank"> <img src={link} alt="websit link" /> </a>
                </li>
            </ul>


        </div>
    )
}

export default DescriptionPage
