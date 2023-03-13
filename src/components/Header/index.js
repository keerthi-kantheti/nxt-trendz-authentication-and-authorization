// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <div className="nav-md">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo"
      />
      <ul className="md-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Products</li>
        <li>Cart</li>
        <li>
          <button type="button" className="logout-btn-md">
            Logout
          </button>
        </li>
      </ul>
    </div>
    <div className="nav-sm">
      <div className="logout-logo-sm-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout"
        />
      </div>
      <ul className="sm-ul">
        <li>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav-home"
            />
          </Link>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav-products"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav-cart"
          />
        </li>
      </ul>
    </div>
  </>
)

export default Header
