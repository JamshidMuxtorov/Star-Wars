import React from 'react'
import css from "./PeopleNavigation.module.css"
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import UiButton from 'components/Ui/UiButton'
function PeopleNavigation({
    getResource, prevP, nextP, counterP,
}) {
    const handleChangeNext = () => getResource(nextP)
    const handleChangePrev = () => getResource(prevP)
    return (
        <div className={css.container}>
            <Link className={css.buttons} to={`/people/?page=${counterP - 1}`}><UiButton text="Previous" onClick={handleChangePrev} disabled={!prevP} /></Link>
            <Link className={css.buttons} to={`/people/?page=${counterP + 1}`}><UiButton text="Next" onClick={handleChangeNext} disabled={!nextP} /></Link>
        </div>
    )
}
PeopleNavigation.proptype = {
    getResource: PropTypes.func,
    prevP: PropTypes.string,
    nextP: PropTypes.string,
    counterP: PropTypes.number
}
export default PeopleNavigation