import React from 'react'
import { useEffect, useState, Suspense } from 'react'
import css from "./PersonPage.module.css"
import { getApiResource } from 'utils/network'
import { withError } from 'hoc/withError'
import { API_PERSON, } from 'constants/api'
import { useParams } from 'react-router-dom'

import { getPeopleImage } from 'services/getPeopleData'
import UiLoading from 'components/Ui/UiLoading'
import PersonInfo from './PersonInfo'
import PersonPhoto from './PersonPhoto'
import PropTypes from "react"
import PersonLinkBack from './PersonLinkBack'
import { useSelector } from 'react-redux'
const PersonFilms = React.lazy(() => import('./PersonFilms'))
const PersonPage = ({ setError }) => {
    const [personId, setPersonId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState([])
    const [personFavorite, setPersonFavorite] = useState(false)

    const storeData = useSelector(state => state.favoriteReducer)

    const { id } = useParams();
    useEffect(() => {
        (async () => {
            // const id = match.params.id;
            const res = await getApiResource(`${API_PERSON}/${id}/`);
            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)
            setPersonId(id)

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'gender', data: res.gender },
                ]);
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id));
                res.films.length && setPersonFilms(res.films)

            }
            if (!res) setError(true)
        })();
    }, []);

    return (
        <>

            <PersonLinkBack />
            <div className={css.wrapper}>
                <span className={css.person_name}>{personName}</span >
                <div className={css.container}>

                    <PersonPhoto personFavorite={personFavorite} setPersonFavorite={setPersonFavorite} personPhoto={personPhoto} personName={personName} id={personId} />


                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    {personFilms && (
                        <Suspense fallback={<UiLoading theme={'black'} />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}
PersonPage.proptype = {
    setError: PropTypes.func
}
export default withError(PersonPage)