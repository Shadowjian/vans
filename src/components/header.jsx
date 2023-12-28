import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="host"
          // className={({ isActive }) => (isActive ? "active-link" : null)} // with the updated router this won't be needed just define .active style in css and it will automatically be applied
        >
          Host
        </NavLink>
        {/* <NavLink
          to="about"
          // className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink> */}
        <NavLink
          to="vans"
          // className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  )
}
