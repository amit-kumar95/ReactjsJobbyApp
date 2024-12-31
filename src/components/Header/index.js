import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="headerContainer">
      <Link to="/">
        <img
          className="websiteImg"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
      </Link>
      <div className="homeJobContainer">
        <Link to="/" className="linkStl">
          <p className="home">Home</p>
        </Link>
        <Link to="/jobs" className="linkStl">
          <p className="jobs">Jobs</p>
        </Link>
      </div>
      <button onClick={onClickLogout} className="logoutBtn" type="button">
        Logout
      </button>

      <ul className="nav-bar-mobile-icons-container">
        <li>
          <Link to="/" className="linkStl">
            <AiFillHome className="nav-item-mobile-link" />
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="linkStl">
            <BsFillBriefcaseFill className="nav-item-mobile-link" />
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default withRouter(Header)
