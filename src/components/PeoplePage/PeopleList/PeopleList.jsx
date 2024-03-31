import React from 'react'
import PropTypes from "prop-types"

import { Link } from 'react-router-dom'
import css from "./PeopleList.module.css"

function PeopleList({ people }) {
  return (
    <>

      <div className={css.container}>
        <ul className={css.peopleUl}>
          {people.map(({ name, img, id }) =>
            <li key={id} className={css.peopleLi}>
              <Link to={`/people/${id}`}>
                <img src={img} alt="" />
                <p>{name}</p>
              </Link>
            </li>
          )}
        </ul>
      </div>

    </>
  )
}
PeopleList.proptype = {
  people: PropTypes.array
}

export default PeopleList