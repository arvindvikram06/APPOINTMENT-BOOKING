import React from 'react'
import Header from '../Header/Header'
import Router from '../../routes/Router'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
    <Header />
    <main>
        <Router />
    </main>
    <Footer />
    </>
  )
}

export default Layout