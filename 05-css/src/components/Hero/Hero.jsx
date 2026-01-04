import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <h1>Software Engineer</h1>
        <p className={styles.desc}>Software Engineer focused on building scalable, high-performance systems. Passionate about clean code, thoughtful architecture, and transforming complex ideas into reliable technology.</p>
        <div className={styles.buttons}>Download Resume</div>
    </div>
  )
}

export default Hero