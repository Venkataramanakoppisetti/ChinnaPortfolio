import {Link} from 'react-router-dom'
import {IoIosHome} from 'react-icons/io'
import {FcAbout} from 'react-icons/fc'
import {GrProjects} from 'react-icons/gr'
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
          <li className="nav-menu-item-large">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-item-large">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-menu-item-large">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="mobile-header-container">
        <div className="nav-option-container">
          <Link to="/" className="nav-link">
            <li className="nav-menu-item-mobile">
              <IoIosHome />
            </li>
          </Link>
          <p className="nav-option">Home</p>
        </div>
        <div className="nav-option-container">
          <Link to="/about" className="nav-link">
            <li className="nav-menu-item-mobile">
              <FcAbout />
            </li>
          </Link>
          <p className="nav-option">About</p>
        </div>
        <div className="nav-option-container">
          <Link to="/projects" className="nav-link">
            <li className="nav-menu-item-mobile">
              <GrProjects />
            </li>
          </Link>
          <p className="nav-option">Projects</p>
        </div>
      </ul>
    </div>
  </nav>
)

export default Header
