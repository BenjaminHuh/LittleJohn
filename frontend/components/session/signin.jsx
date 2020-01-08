import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signin(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Welcome to LittleJohn</h2>
        <form>
          <label>Username
            <br/>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <br/>
          <label>Password
            <br/>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <br/>
            <br/>
            <button onClick={this.handleSubmit}>Sign In</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Signin;
