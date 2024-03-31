import React, { useState, useEffect } from 'react'
import css from "./UiLoading.module.css"
import cn from 'classnames'
import PropTypes from "react"
import loader_black from "../../../static/loader_black.svg"
import loader_bl from "../../../static/loader2.svg"
import loader_wh from "../../../static/loader_white.svg"
function UiLoading({ theme = 'blue', isShadow = true, classes }) {
    const [loaderIcon, setLoaderIcon] = useState(null)
    useEffect(() => {
        switch (theme) {
            case 'black': setLoaderIcon(loader_black); break;
            case 'white': setLoaderIcon(loader_wh); break;
            case 'blue': setLoaderIcon(loader_bl); break;

            default: setLoaderIcon(loader_bl); break;
        }
    }, [])
    return (
        <div>
            <img className={cn(css.loader, isShadow && css.shadow, classes)} src={loaderIcon} alt="" />
        </div>
    )
}
UiLoading.proptype = {
    theme: PropTypes.string,
    isShadow: PropTypes.boolean,
    classes: PropTypes.string
}
export default UiLoading