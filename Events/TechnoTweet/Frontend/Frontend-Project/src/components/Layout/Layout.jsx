import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>
       {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
