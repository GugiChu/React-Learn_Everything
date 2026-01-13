import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Card2 from './components/Card2'

const App = () => {
  const [cart, setcart] = useState(null);

  let addToCart = () => {
    setcart(cart + 1);
  }

  return (
    <main>
      <Navbar cart={cart} />
      <div className="hero">
        <Card addToCart={addToCart} />
        <Card2 addToCart={addToCart} />
      </div>
    </main>
  )
}

// Updating state correctly (objects, arrays, immutability)
// Batch updates in React (prev*)

export default App