import React from 'react'
import css from "./PersonPhoto.module.css"
import PropTypes from "react"
import { useDispatch } from 'react-redux'
import favorite_bgno from "./img/like2.svg"
import favorite_bg from "./img/like.svg"
import { Link } from 'react-router-dom'
import { setPersonToFavorite, removePersonFromFavorite, } from 'store/actions'
function PersonPhoto({ personPhoto, personName, id, personFavorite, setPersonFavorite }) {
    const dispatch = useDispatch();


    // const add = () => {
    //     dispatch(setPersonToFavorite({
    //         [id]: {
    //             name: personName,
    //             img: personPhoto
    //         }
    //     }));
    //     setPersonFavorite(true)
    // }


    // const remove = () => {
    //     dispatch(removePersonFromFavorite(id));
    //     setPersonFavorite(false)
    // }

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(id));
            setPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [id]: {
                    name: personName,
                    img: personPhoto
                }
            }));
            setPersonFavorite(true)
        }
    }

    return (
        <>
            <div className={css.container}>  <img className={css.photo} src={personPhoto} alt={id} />

                {/* {personFavorite ? <button onClick={remove}>Remove</button> : <button onClick={add}>ADD</button>} */}


                {/* <button onClick={dispatchFavoritePeople}>  {personFavorite ? 'Remove' : 'Add'} </button> */}


                <Link onClick={dispatchFavoritePeople} className={css.favorite}><img src={personFavorite ? favorite_bg : favorite_bgno} alt="" /></Link>
            </div>



        </>
    )
}
PersonPhoto.proptype = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
    id: PropTypes.string
}
export default PersonPhoto