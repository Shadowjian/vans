import { Outlet } from "react-router-dom"
import Footer from "./footer"
import Header from "./header"

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
