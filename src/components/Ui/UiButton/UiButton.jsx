import React from 'react'
import "../index.css"
import css from "./UiButton.module.css"
import cn from 'classnames'
import PropTypes from "prop-types"

function UiButton({ text, onClick, disabled, theme = 'dark', classes }) {
    return (
        <>
            <button onClick={onClick} disabled={disabled} className={cn(css.button, css[theme], classes)}>{text}</button >


        </>
    )
}
UiButton.proptype = {


    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string

}

export default UiButton