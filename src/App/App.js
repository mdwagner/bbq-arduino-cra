import React, { Component } from 'react';
import Pages from './pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false
    };
    this.handleHomePageClick = this.handleHomePageClick.bind(this);
  }

  handleHomePageClick() {
    this.setState(prevState => {
      return Object.assign(
        {},
        prevState,
        {
          showLogin: !prevState.showLogin
        }
      );
    });
  }

  render() {
    const { showLogin } = this.state;
    return (
      <div>
        {showLogin ?
          <Pages.LoginPage prev={this.handleHomePageClick} />
          :
          <Pages.HomePage next={this.handleHomePageClick} />
        }
      </div>
    );
  }
}

export default App;
