// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const isDarkBg = isDarkTheme ? 'dark-bg' : 'light-bg'

      const isDarkImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const isDarkHomeHeading = isDarkTheme
        ? 'dark-home-heading'
        : 'light-home-heading'

      return (
        <div>
          <Navbar />
          <div className={isDarkBg}>
            <img src={isDarkImg} alt="about" className="home-image" />
            <h1 className={isDarkHomeHeading}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
