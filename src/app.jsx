import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"

import "./server"
import Nav from "./components/nav"
import { useEffect, useState } from "react"
import VanDetail from "./pages/VanDetail"
import Vans from "./pages/vans"

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
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans vans={vans} />} />
        <Route path="/vans/:id" element={<VanDetail vans={vans} />} />
      </Routes>
    </BrowserRouter>
  )
}
