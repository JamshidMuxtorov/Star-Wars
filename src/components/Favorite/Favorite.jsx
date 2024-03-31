import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import bookmark from "./bookmark.svg"
import css from './Favorite.module.css'
import { NavLink } from 'react-router-dom'
function Favorite() {
    const [count, setCount] = useState()
    const storeData = useSelector(state => state.favoriteReducer)
    useEffect(() => {
        const lenght = Object.keys(storeData).length
        setCount(lenght)
        lenght.toString().length > 99 ? setCount('..') : setCount(lenght)
    });
    return (
        <div className={css.container}>
      
            <NavLink to="/favorites">
                <span className={css.counter}>{count}</span>
                <img src={bookmark} className={css.icon} alt={"Bookmark"} />

            </NavLink>

        </div>
    )
}

export default Favorite