import React, { Fragment } from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Fragment>
        <Header/>
        <Outlet/>
        <h1 className="text-6xl font-bold underline text text-green-600">
          Hello world!
        </h1>
    </Fragment>
  )
}

export default Layout