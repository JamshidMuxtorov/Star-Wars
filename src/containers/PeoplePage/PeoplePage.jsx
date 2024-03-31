import React from 'react'
import PropTypes from "prop-types"

import { withError } from 'hoc/withError';
import PeopleList from 'components/PeoplePage/PeopleList';
import { useEffect, useState } from 'react'
import { getApiResource, changeHTTP } from 'utils/network'
import { API_PEOPLE } from "constants/api";
import { getPeopleId, getPeopleImage, getPageId } from 'services/getPeopleData';
import { useQueryParams } from 'hooks/useQueryParams';
import PeopleNavigation from 'components/PeoplePage/PeopleNavigation';
import css from "./PeoplePage.module.css"


function PeoplePage({ setError }) {

  const [people, setPeople] = useState(null)
  const [prevP, setPrevP] = useState(null)
  const [nextP, setNextP] = useState(null)
  const [counterP, setCounterP] = useState(1)

  const query = useQueryParams();
  const queryPage = query.get('page')
  // console.log(counterP)
  const getResource = async (url) => {


    const res = await getApiResource(url)
    if (res) {
      const peoplelist = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        // console.log(img);
        return {
          id,
          name,
          img,
        }
      })

      setPeople(peoplelist)
      setPrevP(changeHTTP(res.previous))
      setNextP(changeHTTP(res.next))
      setCounterP(getPageId(url))
      setError(false)
    }
    else {
      setError(true)
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [])



  return (
    <>
      <PeopleNavigation getResource={getResource} prevP={prevP} nextP={nextP} counterP={counterP} />
      {people && (
        <PeopleList people={people} />
      )}

    </>
  )
}
PeoplePage.proptype = {
  setError: PropTypes.func
}

export default withError(PeoplePage)
// return (
//   <>
//     {error ? <h1> Error</h1> : (
//       <>
//         {people && (
//           <PeopleList people={people} />
//         )}

//       </>
//     )}


//   </>
// )