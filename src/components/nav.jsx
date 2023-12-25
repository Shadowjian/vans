import { Link } from "react-router-dom"

const Nav = () => (
  <>
    <Link className="site-logo" to="/">
      #VanLife
    </Link>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    </nav>
  </>
  // <div id="nav-bar">
  //   <div id="logo">
  //     <Link to="/">#VANLIFE</Link>
  //   </div>
  //   <div id="nav-links">
  //     <Link to="/about">About</Link>
  //     <Link to="/vans">Vans</Link>
  //   </div>
  // </div>
)

export default Nav
