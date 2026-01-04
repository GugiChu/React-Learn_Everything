import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
      <>
      <Card pfp="https://i.pinimg.com/736x/3d/86/a0/3d86a03bc4f834049ff11b2b75d4e7a2.jpg" name="Gaurav Chhajer" prof="Web Developer" />
      <Card pfp="https://i.pinimg.com/1200x/2c/36/44/2c364466678be55dfacfe65c673844c1.jpg" name="John Doe" prof="Software Engineer" />
      <Card pfp="https://i.pinimg.com/736x/f6/91/60/f6916069beed6a2e3565881d3db8941d.jpg" name="Jane Smith" prof="UI Designer" />
      </>
  )
}

export default App