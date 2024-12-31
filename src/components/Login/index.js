import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', showSubmitError: false}

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 90, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginContainer">
        <div className="formContainer">
          <div className="imgContainer">
            <img
              className="webLogoImg"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </div>
          <form className="formStl" onSubmit={this.onSubmitLoginForm}>
            <label className="labelStl" htmlFor="username">
              USERNAME
            </label>

            <input
              value={username}
              className="inputStl"
              id="username"
              type="text"
              onChange={this.onChangeUsername}
            />

            <label className="labelStl" htmlFor="password">
              PASSWORD
            </label>

            <input
              onChange={this.onChangePassword}
              value={password}
              className="inputStl"
              type="password"
              id="password"
            />

            <button className="loginButton" type="submit">
              Login
            </button>
            {showSubmitError && <p className="error-message">* {errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
