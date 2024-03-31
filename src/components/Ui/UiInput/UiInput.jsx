import React from 'react'
import "../index.css"
import x from './img/cancel.svg'
import css from "./UiInput.module.css"
import cn from 'classnames'
import PropTypes from "prop-types"

function UiInput({ value, handleInputChange, classes, placeholder }) {
    return (
        <>
            <div className={cn(css.wrapper__input, classes)}>
                <input type="text" value={value} onChange={(e) => handleInputChange(e.target.value)} placeholder={placeholder} className={css.input} />
                <img src={x}
                    onClick={() => value && handleInputChange('')}
                    className={cn(css.clear, !value && css.clear__diable)} alt='clear' />
            </div>
        </>
    )
}
UiInput.proptype = {


    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    classes: PropTypes.string,
    placeholder: PropTypes.string

}

export default UiInput