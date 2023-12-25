import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/about"
import Home from "./pages/home"
import Vans from "./pages/vans"

import "./server"
import Nav from "./components/nav"
import { useEffect, useState } from "react"

export default function App() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [])
  return (
    <BrowserRouter>
      <header>
        {/* <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav> */}
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans vans={vans} />} />
      </Routes>
    </BrowserRouter>
  )
}
