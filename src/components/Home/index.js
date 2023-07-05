// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const isDarkBg = isDarkTheme ? 'dark-bg' : 'light-bg'

      const isDarkImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const isDarkHomeHeading = isDarkTheme
        ? 'dark-home-heading'
        : 'light-home-heading'

      return (
        <div>
          <Navbar />
          <div className={isDarkBg}>
            <img src={isDarkImg} alt="home" className="home-image" />
            <h1 className={isDarkHomeHeading}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
