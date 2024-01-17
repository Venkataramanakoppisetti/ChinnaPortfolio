import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-large-container">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/dyhrvktyr/image/upload/v1702916207/passport_size_photo_ezg7ob.jpg"
          alt="website logo"
        />
        <h1 className="my-name">Venkata Ramana</h1>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="mobile-header-container">
        <Link to="/" className="nav-link">
          <li className="nav-menu-item">Home</li>
        </Link>
        <Link to="/about" className="nav-link">
          <li className="nav-menu-item">About</li>
        </Link>
        <Link to="/projects" className="nav-link">
          <li className="nav-menu-item">Projects</li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
