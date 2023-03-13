// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="bg-container">
    <Header />
    <div className="home-content-container">
      <div>
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="content-para">
          Fashion is part of the daily air and it does not quiet help that it
          changes
          <br /> all the time.Clothes have always been a marker of the era and
          we are in
          <br /> a revolution.Your fashion makes you been seen and heard that
          way you
          <br /> are.So,celebrate the seasons and exciting fashion in your own
          way
        </p>
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="clothes-img"
      />
    </div>
  </div>
)
export default Home
