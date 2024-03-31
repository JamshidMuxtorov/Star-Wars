import React from 'react'
import css from './PersonInfo.module.css'
import PropTypes from "react"
function PersonInfo({ personInfo }) {
    return (
        <>
            <div className={css.wrapper}>

                <ul className={css.list_container}>
                    {
                        personInfo.map(({ title, data }) => (
                            data && (

                                <li className={css.list_item} key={title}>
                                    <span className={css.list_title}>{title}:{data}</span>
                                </li>
                            )
                        )

                        )
                    }
                </ul>
            </div>
        </>
    )
}
PersonInfo.proptype = {
    personInfo: PropTypes.arr
}
export default PersonInfo