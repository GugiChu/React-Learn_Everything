import React, { useState } from 'react'

{/*<i class="ri-eye-line"></i>*/ }



const App = () => {

  const [pass, setPass] = useState("********");
  const [icon, seticon] = useState("ri-eye-off-line");

  function seen() {
    setPass("Air@420");
    seticon("ri-eye-line");
  }

  return (
    <main>
      <div className="box">
        <p className='text'>Password:</p>
        <div className="passBox">
          <p className='pass'>{pass}</p>
          <div onClick={seen} className="eye"><i className={icon}></i></div>
        </div>
      </div>
    </main>
  )
}

export default App