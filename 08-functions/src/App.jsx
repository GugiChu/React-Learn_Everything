import React from "react";


const App = () => {
  const mouseFollower = (e) => {
    const pointer = document.querySelector(".pointer");
    pointer.style.left = e.pageX + "px";
    pointer.style.top = e.pageY + "px";
  };

  return (
    <main onMouseMove={mouseFollower}>
      <video
        id="myVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg-effect.mp4" type="video/mp4" />
      </video>

      <div className="pointer"></div>
    </main>
  );
};

export default App;
