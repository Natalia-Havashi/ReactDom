import Navigation from "components/Navigation/Navigation"
import { Outlet, useLocation } from "react-router-dom"

const Layout = () => {
    const location = useLocation()
    return (
    <>
    {!location.pathname.includes('details') && (<header>
    <Navigation />
   </header>)}
   
   <main> <Outlet /></main>
  
    </>
    )
}

export default Layout