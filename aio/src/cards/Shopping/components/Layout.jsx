import { Outlet } from "react-router-dom"
import Header from "./Header"
import NavTabs from "./NavTabs"
import Footer from "./Footer"

const Layout = ({ search, setSearch }) => {
  return (
      <div className="App">
          {/* <Header title="Store title" /> */}
          <NavTabs search={search} setSearch={setSearch} />
          <Outlet />
          <Footer />
      </div>
  )
}

export default Layout