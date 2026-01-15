import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [pass, setPass] = useState("")


  const submitBtn = (e) => {
    e.preventDefault();
    alert(`Logged In Sucessfully as ${title}`);
    setTitle('')
    setPass('')
  };

  return (
    <main>
      <form className="form">
        <p>Welcome !</p>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <div className="btn">
          <button type="submit" onClick={submitBtn}>Submit</button>
        </div>
      </form>
    </main>
  );
};

export default App;
