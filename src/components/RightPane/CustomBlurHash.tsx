import React from 'react'
import { Blurhash } from 'react-blurhash'
const CustomBlurHash = ({height,width,hash}:{height:number,width:number,hash:string}) => {
    return (
        <Blurhash
            hash={hash}
            width={width}
            height={height}
            resolutionX={32}
            resolutionY={32}
            punch={1}

        />
    )
}

export default CustomBlurHash
