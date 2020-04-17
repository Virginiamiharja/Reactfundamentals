import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Redirect } from "react-router-dom";

class LoginScreen extends React.Component {
  state = {
    users: [],
    username: "",
    password: "",
    currId: null,
    currUsername: "",
    isLoggedIn: false
  };

  // Ini biar dia cuma sekali manggil fungsinya gitu
  componentDidMount() {
    Axios.get(`${API_URL}/users`)
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  loginHandler = () => {
    const { users, username, password } = this.state;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {
        alert("Welcome");
        this.setState({
          username: "",
          password: "",
          isLoggedIn: true,
          currId: users[i].id,
          currUsername: users[i].username
        });
        break;
      }

      // Masih kurang paham sama kondisi ini, apa karena dia ngerender berkali2 ya ?
      if (i == users.length - 1) {
        alert("Wrong username or password !");
      }
    }
  };

  render() {
    const { isLoggedIn, currUsername } = this.state;
    if (!isLoggedIn) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="mt-5 mb-3"> Login </h3>
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
            />
          </form>
        </div>
      );
    } else {
      return <Redirect to={`profile/${currUsername}`} />;
    }
  }
}

export default LoginScreen;
