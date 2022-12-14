
  export function NavBar({menuItems, index}) {
    return (
        <nav className="menu">
            <div className="div">
        <div className="container-menus">
           <ul className="navbar-nav">
           {menuItems.map((menuItem, index) => (
              <li className="nav-item" >
                <a className="link" href="#" key={index} >
                {menuItem}
                </a>
                </li>
           ))}
          </ul>
        </div>
       </div>
    </nav>
    )
   }
    