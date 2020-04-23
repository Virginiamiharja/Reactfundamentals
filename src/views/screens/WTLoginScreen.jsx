import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import { connect } from "react-redux";
import { usernameHandler, loginHandler } from "../../redux/actions";
import Cookie from "universal-cookie";

const cookieObject = new Cookie();

class LoginScreen extends React.Component {
  state = {
    users: [],
    username: "",
    password: "",
    currId: null,
    currUsername: "",
    isLoggedIn: false,
    isWaiting: ""
  };

  loginHandler = () => {
    const { username, password } = this.state;

    const userData = {
      username,
      password
    };

    this.props.onLogin(userData);
  };

  // Disini kita pake component did update
  // Component tersebut akan ke trigger ketika ada sebuah update -> perubahan state -> perubahaan props
  componentDidUpdate() {
    if (this.props.user.id) {
      // Json stringify untuk membuat json menjadi string
      cookieObject.set("authData", JSON.stringify(this.props.user));
    }
  }

  render() {
    const { currUsername } = this.state;
    // if (!this.props.user.id) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h3 className="mt-5 mb-3"> Login </h3>
        <p> Username : {this.props.user.username} </p>
        <form className="form-group">
          <input
            type="text"
            class="form-control mb-3"
            aria-describedby="textHelp"
            placeholder="Username"
            value={this.state.username}
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <input
            type="text"
            class="form-control mb-3"
            aria-describedby="textHelp"
            placeholder="Password"
            value={this.state.password}
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
          <input
            type="button"
            style={{ width: "100%" }}
            class="btn btn-primary"
            value="Login"
            onClick={this.loginHandler}
            disabled={this.state.isWaiting}
          />
        </form>
      </div>
    );
    // } else {
    // return <Redirect to={`profile/${currUsername}`} />;
    // }
  }
}

// Ngeconnect reducers
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

// Ngeconnect function2
const mapDispatchToProps = {
  onChangeUsername: usernameHandler,
  onLogin: loginHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
