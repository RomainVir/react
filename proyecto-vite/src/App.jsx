import './App.css'
import { Header} from './components/Header/Header'
import { NavBar } from './components/Header/Navbar'

const menu = ["Home", "All products", "About us", "Discounts", "Contact", "Login"]

function App() {
  return (
    <div className="App">
    <div className="header">
      <Header 
      logo="../"
      input="search"
      />
    </div>
    <div className="menu">
      <NavBar menuItems={menu} />
  </div>
  </div>
)}

export default App
