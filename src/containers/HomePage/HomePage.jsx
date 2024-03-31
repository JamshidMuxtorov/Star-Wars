import React from 'react'
import css from './HomePage.module.css'
import ChooseSide from 'components/HomePage/ChooseSide'
function HomePage() {
    return (
        <>
            <h1 className='header_text'>Home</h1>
            <ChooseSide />
        </>
    )
}

export default HomePage