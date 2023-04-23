import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './sections/navbar/Navbar'
import Footer from './sections/footer/Footer'
import PaginationControlled from './sections/pagination/PaginationControlled'
import HomePage from './sections/home/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogDetails from './sections/blogDetails/BlogDetails'

function App() {
  const [search, setSearch] = useState("")

  return (
    <>
      <Router>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route element={<HomePage search={search} setSearch={setSearch} />} path='/'/>
        <Route path='/post/:postId' Component={BlogDetails}/>
      </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
