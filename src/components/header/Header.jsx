import React, { useEffect, useState } from 'react'
import css from "./Header.module.css"
import { NavLink, Link } from 'react-router-dom'
import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from 'Context/ThemeProvider'
import Favorite from 'components/Favorite'
import droid from "./img/droid.svg"
import lightsaber from "./img/lightsaber.svg"
import station from "./img/space-station.svg"
import ChooseSide from 'components/HomePage/ChooseSide'
function Header() {
    const [icon, setIcon] = useState(station)
    const isTheme = useTheme();
    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(lightsaber); break;
            case THEME_DARK: setIcon(station); break;
            case THEME_NEITRAL: setIcon(droid); break;
            default: setIcon(station);
        }
    }, [isTheme])



    return (
        <>
            <div className={css.container}>

                <Link> <img src={icon} alt="logo" className={css.logo} /></Link>

                <ul>
                    <li> <NavLink to="/">Home</NavLink></li>
                    <li>   <NavLink to="/people/?page=1">People</NavLink></li>
                    <li>   <NavLink to="/not-found">Not-found</NavLink></li>
                    <li>   <NavLink to="/search">Search</NavLink></li>
                    <li>   <NavLink to="/fail">Fail</NavLink></li>

                </ul>
                <Favorite />

            </div>

        </>
    )
}

export default Header