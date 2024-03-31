import React from 'react'
import css from "./SearchPage.module.css"
import { useState } from 'react'
import PropTypes from 'react'
import { getApiResource } from 'utils/network'
import { API_SEARCH } from 'constants/api'
import { withError } from 'hoc/withError'
import SearchPageInfo from 'components/SearchPage/SearchPageInfo'
import { getPeopleId, getPeopleImage } from 'services/getPeopleData'
import { useEffect } from 'react'
import { debounce, values } from 'lodash'
import { useCallback } from 'react'
import UiInput from 'components/Ui/UiInput'
function SearchPage({ setError }) {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [people, setPeople] = useState([])

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH + param)

        if (res) {
            const peoleList = res.results.map(({ name, url }) => {

                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img,
                }

            })
            setPeople(peoleList)
            setError(false)
        } else {

            setError(true)
        }


    }


    useEffect(() => {
        getResponse('')
    }, [])

    const debouncedGetResponse = useCallback(

        debounce(value => getResponse(value), 300), []
    );


    const handleInputChange = (value) => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }
    return (
        <>
            <h1 className='header_text'>Search</h1>
            <UiInput value={inputSearchValue} handleInputChange={handleInputChange}
                placeholder="Input character's name" classes={css.input__search} />

            <SearchPageInfo people={people} />

        </>
    )
}
SearchPage.prototype = {
    SetError: PropTypes.func
}
export default withError(SearchPage)