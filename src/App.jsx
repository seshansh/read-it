import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './sections/navbar/Navbar'
import Footer from './sections/footer/Footer'
import PaginationControlled from './sections/pagination/PaginationControlled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <PaginationControlled /> */}
      <Footer />
    </>
  )
}

export default App
