import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Make Your Money Move</h2>
        <form>
          <label>
            <br/>
            <input
              type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={this.update('username')}
            />
          </label>
          <br/>
          <label>
            <br/>
            <input
              type="text"
              value={this.state.email}
              placeholder="Email address"
              onChange={this.update('email')}
            />
          </label>
          <br/>
          <label>
            <br/>
            <input
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.update('password')}
            />
            <br/>
            <br/>
            <button onClick={this.handleSubmit}>Continue</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Signup;
