
import { useEffect } from 'react'

import { useContext } from 'react'

import PageTrackerContext from '../../contexts/PageTrackerContext'
import { useOnScreen } from '../../hooks/useOnScreen'

import { IPreview } from '../../interfaces/IPreview'
import classes from './Tile.module.css'
import { Blurhash } from 'react-blurhash'

const Tile = ({ preview }: { preview: IPreview }) => {

    const { setState } = useContext(PageTrackerContext)

    const { setRef, visible } = useOnScreen({ threshold: 0.15 })

    useEffect(() => {
        if (visible) {
        
 setState(preview.title)
    }
})

    const styles = `${classes.tile}  ${visible ? classes.black : ""}`
    return (
        <div className={styles} ref={setRef}>

            <div className={classes["home-page"]}>
                
                <Blurhash
                    hash={preview.primaryImage}
                    width={360}
                    height={800}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    
                />

           </div>
            <div className={classes.menu}>
                <img src={preview.secondaryImage}/>
           </div>
            <div className={classes.basket}>
                <img src={ preview.basketImage} />
           </div>
            <div className={classes.checkout}>
                <img src={preview.tertiaryImage}/>
           </div>

        </div>
    )
}

export default Tile
