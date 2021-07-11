
import { useEffect } from 'react'

import { useContext } from 'react'

import PageTrackerContext from '../../contexts/PageTrackerContext'
import { useOnScreen } from '../../hooks/useOnScreen'

import { IPreview } from '../../interfaces/IPreview'
import classes from './Tile.module.css'
import { useState } from 'react'
import CustomBlurHash from './CustomBlurHash'
const Tile = ({ preview ,id}: { preview: IPreview,id:string}) => {
    const [menuImageIsLoaded, setMenuImageIsLoaded] = useState(false)
    const [cartImageIsLoaded, setCartImageIsLoaded] = useState(false)
    const [homeImageIsLoaded, setHomeImageIsLoaded] = useState(false)
    const [checkoutImageIsLoaded, setCheckoutImageIsLoaded] = useState(false)
 

    const { setRef, visible } = useOnScreen({ threshold: 0.5 })
const {setState} = useContext(PageTrackerContext)
    useEffect(() => {
        if (visible) {
     setState(id)
            return;
        }
        setState('')
     
    },[visible])
    
    const handleHomeOnload = () => {
        setHomeImageIsLoaded(true)
    }
    const handleCartOnload = () => {
        setCartImageIsLoaded(true)
    }
    const handleChekOutOnload = () => {
        setCheckoutImageIsLoaded(true)
    }
    const handleMenuOnload = () => {
        setMenuImageIsLoaded(true)
    }

    const styles = `${classes.tile}  ${visible ? classes.black : ""}`
    return (
        <div className={styles} ref={setRef}>

            <div className={classes["home-page"]}>
                {!homeImageIsLoaded&&<CustomBlurHash hash={preview.home.hash} height={800} width={360} />}
              
                <img src={preview.home.url} alt="homePage" onLoad={handleHomeOnload} />
           </div>
            <div className={classes.menu}>
                {!menuImageIsLoaded && <CustomBlurHash hash={preview.loading.hash} height={480} width={216} />}
                <img src={preview.loading.url} alt="menu preview" onLoad={handleMenuOnload }/>
           </div>
            <div className={classes.cart} onLoad={handleCartOnload}>
                {!cartImageIsLoaded && <CustomBlurHash hash={preview.cart.hash} height={480} width={216} />}
                <img src={preview.cart.url} alt="cart preview"/>
           </div>
            <div className={classes.checkout} onLoad={handleChekOutOnload}>
                {!checkoutImageIsLoaded && <CustomBlurHash hash={preview.checkout.hash} height={800} width={360} />}
                <img src={preview.checkout.url} alt="checkout preview"/>
           </div>

        </div>
    )
}

export default Tile
