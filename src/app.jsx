import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "./pages/about/index"
import Home from "./pages/home/index"

import "./server"
import { useEffect, useState } from "react"
import Layout from "./components/Layout"
import VanDetail from "./pages/vans/VanDetail"
import Vans from "./pages/vans/index"

// host imports
import HostLayout from "./pages/host/Layout"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans from "./pages/host/Vans"
import Van from "./pages/host/van"
import Details from "./pages/host/van/Details"
import Pricing from "./pages/host/van/Pricing"
import Photos from "./pages/host/van/Photos"

// helpers imports
// import { fetcher } from "./utils" TODO: figure this out
// TODO: figure out how to create a fetcher helper

export default function App() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    // fetcher("/api/vans") FIXME:
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {/* app layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* host layout */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />

            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<Van />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>

          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans vans={vans} />} />
          <Route path="vans/:id" element={<VanDetail vans={vans} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
