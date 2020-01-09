import React from 'react';
import { Link } from 'react-router-dom';
// import background from '../../../app/assets/images/signinbackground.png';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserSignin = this.demoUserSignin.bind(this);

  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signin(this.state)
      .then(() => this.props.history.push('/welcome'));
  
  }

  renderSigninErrors() {
    if (this.props.formType === 'Sign In') {
      return (this.props.signinErrors.map((error, i) => (
        <div key={`signin-error-${i}`} className="signin-error">{ error }</div> 
      )));
    } else {
      return "";
    }
  }

  demoUserSignin(e) {
    e.preventDefault();
    let marian = ( { username: 'ladymarian', password: 'password'});
    this.setState = marian;
    this.props.signin(marian).then(() => this.props.history.push('/welcome'));
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
              {this.renderSigninErrors()}
              <br/>
              <br/>
              <button className="signin-button" onClick={this.handleSubmit}>Sign In</button>
              <button className="demo-signin" onClick={this.demoUserSignin}>Demo</button>
            </label>
          </form>
        </div>
        {/* <img id="signin-background" src={window.signinbackground} /> */}
      </div>
    );
  }
}

export default Signin;
