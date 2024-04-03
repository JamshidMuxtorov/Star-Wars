import React from 'react'
import { useState } from 'react'
import style from './App.module.css'
import cn from 'classnames'
import routes from 'routes/routes'
import { RouterProvider } from 'react-router-dom'
import Header from 'components/header/Header'
import { REP_NAME } from 'constants/rep'

function App() {
  return (

    <div className={style.wrapper}>
      <RouterProvider basename={`/${REP_NAME}/`}  router={routes}></RouterProvider>
    </div>


  )
}

export default App