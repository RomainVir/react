import {Link} from 'react-router-dom'
  export function NavBar({menuItems, index}) {
    return (
        <nav className="menu">
            <div className="div">
        <div className="container-menus">
           <ul className="navbar-nav">
           {menuItems.map((menuItem, index) => (
              <li className="nav-item" key={index} >
                <Link className="link" href="#" 
                to={menuItem.path}
                >
                {menuItem.label}
                </Link>
                </li>
           ))}
          </ul>
        </div>
       </div>
    </nav>
    )
   }
    
   