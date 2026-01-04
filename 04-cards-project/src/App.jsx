import React from 'react'
import Card from './components/Card'

const Users = [
  {
    name: "Gaurav Chhajer",
    desc: "UI/UX Designer who focuses on creating intuitive and engaging user experiences.",
    follower: "10k",
    likes: "5k",
  },
  {
    name: "Aarav Mehta",
    desc: "Frontend Developer passionate about building responsive and performant web applications.",
    follower: "8.2k",
    likes: "4.1k",
  },
  {
    name: "Riya Sharma",
    desc: "Product Designer specializing in user research and design systems.",
    follower: "12k",
    likes: "6.8k",
  },
];

const App = () => {
  return (
    <>
<div className="main">
    {Users.map((user,index) => (
      <Card 
        name={user.name}   
        desc={user.desc}
        follower={user.follower}
        likes={user.likes}
      />
    ))}
</div>
    </>
  )
}

export default App