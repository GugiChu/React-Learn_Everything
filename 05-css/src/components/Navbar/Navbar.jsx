import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
       <div className={styles.left}>
        <p>Gaurav Chhajer</p>
       </div>
       <div className={styles.right}>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
       </div>
    </div>
  )
}

export default Navbar