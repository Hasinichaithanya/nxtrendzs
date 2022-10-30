import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link className="link-item" to="/">
            <p className="logo">~Vivah~</p>
          </Link>
          <Link className="link-item" to="/profiles/">
            <p>Profiles</p>
          </Link>
          <Link className="link-item" to="/about-us/">
            About us
          </Link>
          <button
            onClick={onClickLogout}
            type="button"
            className="nav-mobile-btn"
          >
            Logo out
          </button>
        </div>
        <div className="nav-bar-large-container">
          <Link className="link-item" to="/">
            <p className="logo">~Vivah~</p>
          </Link>
          <div className="link-item-container">
            <Link className="link-item" to="/profiles/">
              <p>Profiles</p>
            </Link>
            <Link className="link-item" to="/about-us/">
              About us
            </Link>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
