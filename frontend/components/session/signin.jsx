import React from 'react';
// import background from '../../../app/assets/images/signinbackground.png';

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
      .then(() => this.props.history.push('/welcome'));
  }

  renderErrors() {
    return this.props.errors.map(error => (
      <div className="signin-error">{ error }</div> 
    ))
  }


  render() {


    return (
      <div className="signin-main">
        <div className="signin-form">
          <h2>Welcome to LittleJohn</h2>
          <br/>
          <form>
            <label id="signin-text">Username
              <br/>
              <input id="signin-box"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                autoFocus
              />
            </label>
            <br/>
            <label id="signin-text">Password
              <br/>
              <input id="signin-box"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
              <br/>
              {this.renderErrors()}
              <br/>
              <br/>
              <button className="signin-button" onClick={this.handleSubmit}>Sign In</button>
            </label>
          </form>
        </div>
        {/* <img id="signin-background" src={window.signinbackground} /> */}
      </div>
    );
  }
}

export default Signin;
