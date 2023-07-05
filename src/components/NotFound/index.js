// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const isDarkBg = isDarkTheme ? 'dark-bg' : 'light-bg'

      const isDarkImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

      const isDarkHomeHeading = isDarkTheme
        ? 'dark-home-heading'
        : 'light-home-heading'

      const isDarkDescription = isDarkTheme
        ? 'dark-description'
        : 'light-description'

      return (
        <div>
          <Navbar />
          <div className={isDarkBg}>
            <img src={isDarkImg} alt="not found" className="home-image" />
            <h1 className={isDarkHomeHeading}>Lost Your Way</h1>
            <p className={isDarkDescription}>
              We cannot seem to find the page that you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
