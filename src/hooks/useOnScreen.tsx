

import { useEffect } from 'react'
import { useState } from 'react'
interface IProps {

    threshold: number



}
export const useOnScreen = (options: IProps) => {

    const [ref, setRef] = useState<HTMLDivElement | null>(null)
    const [visible, setVisible] = useState(
        false
    )
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {


            setVisible(entry.isIntersecting)


        }, options)
        if (ref) {
            observer.observe(ref)


        }
        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }

    }, [options, ref])

    return { setRef, visible }
}


