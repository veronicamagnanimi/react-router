import { NavLink } from "react-router-dom";

const AppHeader = () => {

  const navbar = [
    {
      path:"/", title:"HomePage"
    },
    {
      path:"/ChiSiamo", title:"ChiSiamo"
    },
    {
    path:"/PostsList", title:"PostsList"
    }
  ]

    return (

  <header>
    <ul>
      {navbar.map((curNav, index) => {
        return (
          <li key={index}><NavLink to = {curNav.path}>{curNav.title}</NavLink></li>
        )
      })}
    </ul>
  </header>

    )
}

export default AppHeader;