import React from 'react'

const submitBtn = (e)=>{
  e.preventDefault()
  alert('Form Submitted Successfully')
}

const App = () => {
  return (
    <main>
      <form className="form">
        <p>Welcome !</p>
        <input type="text" placeholder='Enter Your Name' />
        <input type="password" placeholder='Enter Your Password'/>
        <div className="btn"><button onClick={(e)=>{
          submitBtn(e)
        }}>Submit</button></div>
      </form>
    </main>
  )
}

export default App