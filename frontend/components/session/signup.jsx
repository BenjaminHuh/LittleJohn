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

  renderSignupErrors() {
    if (this.props.formType === 'Sign Up') {
      return this.props.signupErrors.map((error, i) => (
        <div key={`signup-error-${i}`} className="signin-error">{ error }</div> 
      ))
    }
  }

  render() {
    return (

      <div className="signup-form">
        <div className="signup-inner"> 
        <h2>Make Your Money Move</h2>
        <br/>
        <p>
          LittleJohn lets you invest in companies you love, commission-free.
        </p>
        <form>
          <label>
            <br/>
            <input id="signup-box"
              type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={this.update('username')}
            />
          </label>
          <br/>
          <label>
            <br/>
            <input id="signup-box"
              type="text"
              value={this.state.email}
              placeholder="Email address"
              onChange={this.update('email')}
            />
          </label>
          <br/>
          <label>
            <br/>
            <input id="signup-box"
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.update('password')}
            />
            <br/>
            {this.renderSignupErrors()}
            <br/>
            <button className="signup-cont" onClick={this.handleSubmit}>Continue</button>
          </label>
        </form>
        </div>
      </div>
    );
  }
}

export default Signup;
