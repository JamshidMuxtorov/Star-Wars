import React from 'react'
import { useLocation } from 'react-router-dom'
import notF from "./NotFoundPage.module.css"
import notFound from "./img/404.png"
function NotFoundPage() {
    const location = useLocation()

    location.pathname
    return (
        <>
            <img src={notFound} alt="" className={notF.img} />
            <p className={notF.text}>No match for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFoundPage