import React from 'react'
import css from "./SearchPageInfo.module.css"
import PropTypes from 'react';
import { Link } from 'react-router-dom'
function SearchPageInfo({ people }) {
    return (
        <>{people.length ? (
            <ul className={css.list__container}>
                {people.map(({ name, img, id }) =>
                    <li className={css.list__item} key={id} >
                        <Link to={`/people/${id}`} >
                            <img src={img} className={css.photo} />
                            <p className={css.person__name}>{name}</p>
                        </Link></li>
                )}
            </ul>
        ) : <h2 className={css.person__coment}>No results</h2 >}

        </>
    )
}
SearchPageInfo.prototype = {
    people: PropTypes.array,
}
export default SearchPageInfo;