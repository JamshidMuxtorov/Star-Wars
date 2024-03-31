import { useState, useEffect } from "react";
import { v4 } from "uuid";
import styles from "./PersonFilms.module.css"
import PropTypes from "react"
import { makeConcurrentRequest, changeHTTP } from 'utils/network'
function PersonFilms({ personFilms }) {
    const [filmsName, setFilmsName] = useState([]);
    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url));
            const response = await makeConcurrentRequest(filmsHTTPS);
            // console.log(response)
            setFilmsName(response);

        })();
    }, [personFilms])
    return (
        <>
            <div className={styles.wrapper}>
                <ul className={styles.list__container}>
                    {filmsName
                        .sort((a, z) => a.episode_id - z.episode_id)
                        .map(({ title, episode_id }) =>
                            <li className={styles.list__item} key={v4()}>
                                <span className={styles.item__episide}>Episode {episode_id}</span>
                                <span className={styles.item__colon}> : </span>
                                <span className={styles.item__title}>{title}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}
PersonFilms.proptype = {
    personFilms: PropTypes.array
}
export default PersonFilms