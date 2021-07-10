
import { IPreview } from '../../interfaces/IPreview'
import classes from './RightPane.module.css'
import Tile from './Tile'
import basket from '../../assets/first_burger_images/first_burger_basket.png'
import checkout from '../../assets/first_burger_images/first_burger_checkout.png'
import loading from '../../assets/first_burger_images/first_burger_home_loading.png'


const RightPane = () => {
    const burgerPreview:IPreview= {
        basketImage: basket,
        primaryImage:"L6B:HQD-.T-N={s+EQNLS%s+I@NL",
        secondaryImage: loading,
        tertiaryImage: checkout,
        title:"page-1"
  }
  
    return (
        <div className={classes["right-pane"]}>
            <Tile preview={burgerPreview} />
            <Tile preview={burgerPreview}    />
            <Tile preview={burgerPreview}   />
        </div>
    )
}

export default RightPane
