import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to=""
          end // this will negate the active link matching of the parent link
          style={({ isActive }) => (isActive ? active : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? active : null)}
        >
          Income
        </NavLink>
        <NavLink to="vans" style={({ isActive }) => (isActive ? active : null)}>
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? active : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

const active = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
}
