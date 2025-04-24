import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const logoutbutton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <div className="header-logo-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="header-logo"
          />
        </Link>
      </div>
      <ul className="List">
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link to="/jobs">jobs</Link>
        </li>
        <li className="list-item">
          <Link to="/jobs">About</Link>
        </li>
      </ul>
      <Link to="/login">
        <button type="button" onClick={logoutbutton} className="logout-button">
          Logout
        </button>
      </Link>
    </nav>
  )
}

export default withRouter(Header)
