import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: ''
    }
  }

  changeFullName (event) {
    this.setState({
      fullName: event.target.value
    })
  }

  onChangeUsername (event) {
    this.setState({
      userman: event.target.value
    })
  }

  onChangeEmail (event) {
    this.setState({
      email: event.target.value
    })
  }

  onChangePassword (event) {
    this.setState({
      password: event.target.value
    })
  }

  render () {
    return (
      <div>
        <div className='container'>
          <div className='form-div'>
            <form>
              <input
                type='text'
                placeholder='fullName'
                onChange={this.changeFullName}
                value={this.state.fullName}
                className='form-control form-group'
              />

              <input
                type='text'
                placeholder='username'
                onChange={this.onChangeUsername}
                value={this.state.username}
                className='form-control form-group'
              />

              <input
                type='text'
                placeholder='email'
                onChange={this.onChangeEmail}
                value={this.state.email}
                className='form-control form-group'
              />

              <input
                type='text'
                placeholder='password'
                onChange={this.onChangePassword}
                value={this.state.password}
                className='form-control form-group'
              />

              <input type='submit' className='btn btn-danger btn-block' value='Submit' />
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default App
