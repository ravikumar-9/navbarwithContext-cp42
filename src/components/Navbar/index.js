// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const isDarkWebIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const isDarkMenuItems = isDarkTheme
        ? 'dark-menu-items'
        : 'light-menu-items'

      const isDarkThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

      const isDarkNavbar = isDarkTheme ? 'dark-navbar' : 'light-navbar'

      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={isDarkNavbar}>
          <img
            src={isDarkWebIcon}
            alt="website-logo"
            className="website-logo"
          />
          <ul className="menu-items">
            <Link to="/" className="nav-link">
              <li className={isDarkMenuItems}>Home</li>
            </Link>
            <Link to="/about" className="nav-link">
              <li className={isDarkMenuItems}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="theme-button"
            onClick={onChangeTheme}
            data-testid="theme"
          >
            <img src={isDarkThemeImg} alt="theme" className="theme-img" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
