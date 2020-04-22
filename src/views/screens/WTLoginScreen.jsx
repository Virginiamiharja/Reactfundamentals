import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import { connect } from "react-redux";
import { usernameHandler, loginHandler } from "../../redux/actions";

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
    // Axios.get(`${API_URL}/users`, {
    //   params: {
    //     username,
    //     password
    //   }
    // })
    //   .then(res => {
    //     if (res.data.length > 0) {
    //       this.setState({
    //         users: res.data,
    //         isLoggedIn: true,
    //         currUsername: username
    //       });
    //       this.props.onChangeUsername(res.data[0].fullName);
    //     } else {
    //       swal("Oops", "Wrong username or password", "error");
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  render() {
    const { isLoggedIn, currUsername } = this.state;
    if (!isLoggedIn) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="mt-5 mb-3"> Login </h3>
          <p> Username : {this.props.user.username}</p>
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
    } else {
      return <Redirect to={`profile/${currUsername}`} />;
    }
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
