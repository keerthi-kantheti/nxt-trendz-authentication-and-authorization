// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errormsg: ''}

  onChangeNameInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    console.log(username, password)
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    console.log(response)
    if (response.ok === true) {
      this.onSuccess()
    } else {
      this.setState({errormsg: data.error_msg})
    }
  }

  render() {
    const {username, password, errormsg} = this.state

    return (
      <div className="form-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />

          <label htmlFor="nameInput">USERNAME</label>
          <br />
          <input
            type="text"
            id="nameInput"
            placeholder="Username"
            value={username}
            onChange={this.onChangeNameInput}
          />

          <label htmlFor="passwordInput">PASSWORD</label>
          <br />
          <input
            type="password"
            id="passwordInput"
            placeholder="Password"
            value={password}
            onChange={this.onChangePasswordInput}
          />

          <button type="submit" className="login-button">
            Login
          </button>
          <p>{errormsg}</p>
        </form>
      </div>
    )
  }
}
export default LoginForm
