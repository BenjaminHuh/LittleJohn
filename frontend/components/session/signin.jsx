import React from 'react';
import { Link } from 'react-router-dom';


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserSignin = this.demoUserSignin.bind(this);

  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signin(this.state)
      .then(() => this.props.history.push('/'));
  
  }

  renderErrors() {
    return (this.props.errors.map((error, i) => (
      <div key={`error-div-${i}`} className="error-div">
        <div key={`signin-error-${i}`} className="signin-error">{ error }</div> 
      </div>
    )));
  }

  demo(demoUser) {
    const intervalSpeed = 75;
    const { username, password } = demoUser;
    const demoUsernameTime = username.length * intervalSpeed;
    const demoPasswordTime = password.length * intervalSpeed;
    const buffer = intervalSpeed * 2;
    const totalDemoTime = demoUsernameTime + demoPasswordTime + buffer;
    this.demoUsername(username, intervalSpeed);
    setTimeout(() => this.demoPassword(password, intervalSpeed), demoUsernameTime);
    setTimeout(() => this.props.signin(demoUser).then(() => this.props.history.push('/')), totalDemoTime)
  }

  demoUsername(username, intervalSpeed) {
    let i = 0;
    setInterval(() => {
      if (i <= username.length) {
        this.setState({ username: username.slice(0, i) })
        i++
      } else {
        clearInterval()
      }
    }, intervalSpeed);
  }

  demoPassword(password, intervalSpeed) {
    let j = 0;
    setInterval(() => {
      if (j <= password.length) {
        this.setState({ password: password.slice(0, j) })
        j++
      } else {
        clearInterval();
      }
    }, intervalSpeed);
  }


  demoUserSignin(e) {
    e.preventDefault();
    const demoUser = ({
        username: 'ladymarian',
        password: 'password'
    });
    this.demo(demoUser);
  }

  // demoUserSignin(e) {
  //   e.preventDefault();
  //   let marian = ( { username: 'ladymarian', password: 'password'});
  //   this.setState = marian;
  //   this.props.signin(marian).then(() => this.props.history.push('/dashboard'));
  // }
  
  render() {
    return (
      <div className="signin-main">
        <div className="signin-bg-div">
          <img className="signin-background" src={window.signinbackground} />
        </div>
        <div className="signin-div">
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
                <button type="submit" className="signin-button" onClick={this.handleSubmit}>Sign In</button>
                <button className="demo-signin" onClick={this.demoUserSignin}>Demo</button>
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
