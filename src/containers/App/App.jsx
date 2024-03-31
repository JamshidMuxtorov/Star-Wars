import React from 'react'
import { useState } from 'react'
import style from './App.module.css'
import cn from 'classnames'
import routes from 'routes/routes'
import { RouterProvider } from 'react-router-dom'
import Header from 'components/header/Header'

function App() {
  return (

    <div className={style.wrapper}>
      <RouterProvider router={routes}></RouterProvider>
    </div>


  )
}

export default App