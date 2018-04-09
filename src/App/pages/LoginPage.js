import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event, type) {
    const newState = {};
    if (type === 'username') {
      newState.username = event.target.value;
    } else if (type === 'password') {
      newState.password = event.target.value;
    }
    this.setState(newState);
  }

  render() {
    const { prev } = this.props;
    const {
      username,
      password
    } = this.state;
    return (
      <div>
        <label>
          Username:&nbsp;
          <input type="text" value={username} onChange={e => this.handleInput(e, 'username')} />
        </label>
        <br/>
        <label>
          Password:&nbsp;
          <input type="text" value={password} onChange={e => this.handleInput(e, 'password')} />
        </label>
        <br/>
        <button onClick={prev}>Back to Welcome Screen</button>
      </div>
    );
  }
}

export default LoginPage;
