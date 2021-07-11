
import { IPage } from '../../interfaces/IPage'
import classes from './DescriptionPage.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import link from '../../assets/link.svg'
const DescriptionPage = ({ item }: { item: IPage }) => {
    
    const tools = item.buildTools.split(',')
   
    return (
        <div className={classes["app-specs"]}>
            <h1>{item.id.toUpperCase()}</h1>
            <h3>{item.about}</h3>
            <div className={classes["build-tools"]}>
                <h4>Build Tools</h4>
                <ul>
                    {tools.map(tool => <li key={tool}>{tool}</li>)}
                </ul>
            </div>
            <ul className={classes.links}>

                <li >
                    <a href={item.github} target="_blank" rel="noreferrer">
                        <GitHubIcon style={{color:"black",width:"90%",height:"90%"}}/>
                    </a>
                </li>
                <li>
                    <a href={item.websiteLink} target="_blank" rel="noreferrer"> <img src={link} alt="websit link" /> </a>
                </li>
            </ul>


        </div>
    )
}

export default DescriptionPage
