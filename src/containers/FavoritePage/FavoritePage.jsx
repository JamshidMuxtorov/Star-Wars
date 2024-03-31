import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import css from "./FavoritePage.module.css"
import PeopleList from 'components/PeoplePage/PeopleList'
function FavoritePage() {
    const [people, setPeople] = useState([])
    const storeData = useSelector(state => state.favoriteReducer)
    useEffect(() => {
        const arr = Object.entries(storeData)
        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })
            setPeople(res)
        }
    }, [])
    return (
        <>
            <h1 className='header_text'>Favorite Page</h1>
            {people.length ? <PeopleList people={people} /> : <h2 className={css.coment}>No data</h2>}

        </>
    )
}

export default FavoritePage