import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";
import { registerHandler } from "../../redux/actions";
import { connect } from "react-redux";

class RegistrationScreen extends React.Component {
  state = {
    users: [],
    username: "",
    fullName: "",
    password: "",
    role: "",
    isWaiting: false
  };

  registrationHandler = () => {
    const { username, fullName, password, role } = this.state;

    const userData = {
      username,
      fullName,
      password,
      role
    };

    this.props.onRegister(userData);
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h3 className="mt-5 mb-3"> Registration </h3>
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
            disabled={this.state.isWaiting}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  onRegister: registerHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);
