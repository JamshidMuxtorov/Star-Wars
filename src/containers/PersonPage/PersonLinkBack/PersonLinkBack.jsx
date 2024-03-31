import React from 'react'
import css from "./PersonLinkBack.module.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import icon from "../../../static/backimg.png"
function PersonLinkBack() {
    let navigate = useNavigate()

    return (
        <>
            <Link onClick={() => navigate(-1)} className={css.link}>
                <img src={icon} alt="" />
                <span>Go back</span></Link>
        </>
    )
}

export default PersonLinkBack