import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class RegistrationScreen extends React.Component {
  state = {
    users: [],
    username: "",
    fullName: "",
    password: "",
    role: ""
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

  registrationHandler = () => {
    const { users, username, fullName, password, role } = this.state;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username) {
        alert("Username must be unique");
        break;
      }

      // Masih kurang paham sama kondisi ini, apa karena dia ngerender berkali2 ya ?
      if (i == users.length - 1) {
        Axios.post(`${API_URL}/users`, {
          username,
          fullName,
          password,
          role
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }

    this.setState({
      username: "",
      fullName: "",
      password: "",
      role: ""
    });
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h3 className="mt-5 mb-3"> Registration </h3>
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
            placeholder="Full Name"
            value={this.state.fullName}
            onChange={e => {
              this.setState({ fullName: e.target.value });
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
            type="text"
            class="form-control mb-3"
            aria-describedby="textHelp"
            placeholder="Role"
            value={this.state.role}
            onChange={e => {
              this.setState({ role: e.target.value });
            }}
          />
          <input
            type="button"
            style={{ width: "100%" }}
            class="btn btn-primary"
            value="Register"
            onClick={this.registrationHandler}
          />
        </form>
      </div>
    );
  }
}

export default RegistrationScreen;
