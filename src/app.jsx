import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Vans from "./pages/Vans"

import "./server"
import Nav from "./components/nav"
import { useEffect, useState } from "react"
import VanDetail from "./pages/VanDetail"

export default function App() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [])
  return (
    <HashRouter>
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
        <Route path="/vans/:id" element={<VanDetail vans={vans} />} />
      </Routes>
    </HashRouter>
  )
}
