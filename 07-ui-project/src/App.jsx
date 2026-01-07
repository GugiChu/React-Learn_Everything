import Navbar from './components/Navbar.jsx'
import Section2 from './components/Section2.jsx'

const App = () => {

const data = [
  {
    img: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    para: "Prime customers, that have access to bank credit and are satisfied with the current product",
    num: 1,
    color: "#4A6FFA",
    button: "Satisfied",
    text: "white"
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    para: "Prime customers, that have access to bank credit and are not satisfied with the current service",
    num: 2,
    color: "#4A6FFA",
    button: "Underserved",
    text: "white"
  },
  {
    img: "https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    para: "Customers from near-prime and sub-prime segments with no access to bank credit",
    num: 3,
    color: "#C7F660",
    button: "Underbanked",
    text: "black"
  }
];

  return (
    <>
    <Navbar />
    <Section2 dets={data} />
    </>
  )
}

export default App