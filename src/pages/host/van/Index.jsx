import { useEffect, useState } from "react"
import { Link, useParams, Outlet, NavLink } from "react-router-dom"

import { active } from "../../../utils"

export default function Van() {
  const [van, setVan] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans[0]))
  }, [id])

  if (!van) {
    return <h1>Loading...</h1>
  }

  // for link can use prop (relative="path") or just direct the prop (to="../vans") to go back to the vans page

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; Back to all vans
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to=""
            end
            style={({ isActive }) => (isActive ? active : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? active : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? active : null)}
          >
            Photos
          </NavLink>
        </nav>
        <div>
          <Outlet context={{ van }} />
        </div>
      </div>
    </section>
  )
}
