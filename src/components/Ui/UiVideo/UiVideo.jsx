import React from 'react'
import PropTypes from "react"
import css from "./UiVideo.module.css"
import cn from "classnames"
import { useEffect, } from 'react'
import { useRef } from 'react'

function UiVideo({ src, classes, playbackRate }) {
    const videoRef = useRef(null)
    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, [])
    return (


        <video playbackRate={playbackRate}
            loop
            autoPlay
            muted
            className={cn(css.video, classes)} ref={videoRef}>

            <source src={src} />
        </video>
    )
}
UiVideo.proptype = {
    src: PropTypes.string,
    playbackRate: PropTypes.number,
    classes: PropTypes.string
}
export default UiVideo