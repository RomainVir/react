import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header} from './components/Header/Header'
import { NavBar } from './components/Header/Navbar'

const menu = ["Home", "All products", "About us", "Discounts", "Contact", "Login"]

function App() {
  return (
    <div className="App">
    <div className="header">
      <Header 
      logo="./assets/logo.png"
      input="search"
      />
    </div>
    <div className="menu">
      <NavBar menuItems={menu} />
  </div>
  <div className='footer'>
    <Footer />
  </div>
  </div>
)}

export default App
