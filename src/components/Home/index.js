import {Component} from 'react'
import FooterSection from '../FooterSection'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">Select your Partner </h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NhNqoo_LcWy66EDcCQnJcw0kzHlpmTmBmg&usqp=CAU"
              alt="home-img"
              className="home-mobile-img"
            />
            <p className="home-description">
              Select your partner, with your liked qualities and caste and job.
              <br />
              This site may help you find your liked ones, hope you get settled
              with this site!!!
            </p>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NhNqoo_LcWy66EDcCQnJcw0kzHlpmTmBmg&usqp=CAU"
            alt="home-img"
            className="home-desktop-img"
          />
        </div>
        <FooterSection />
      </>
    )
  }
}

export default Home
