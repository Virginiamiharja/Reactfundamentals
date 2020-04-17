import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Link } from "react-router-dom";

class ProfileScreen1 extends React.Component {
  state = {
    users: []
  };

  // Ini biar dia cuma sekali manggil fungsinya gitu
  componentDidMount() {
    Axios.get(`${API_URL}/users/`, {
      params: {
        username: this.props.match.params.username
      }
    })
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { users } = this.state;
    return users.map(user => {
      return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <h2 className="mb-3"> Welcome, {user.fullName} </h2>
          <form className="form-group mt-2" style={{ width: "30%" }}>
            <label> Username </label>
            <input
              type="text"
              class="form-control mb-3"
              value={user.username}
            />
            <label> Password </label>
            <input
              type="text"
              class="form-control mb-3"
              aria-describedby="textHelp"
              value={user.password}
            />
            <label> Role </label>
            <input
              type="text"
              class="form-control mb-3"
              aria-describedby="textHelp"
              value={user.role}
            />
            <Link to={`/`}>
              <input
                type="button"
                value="Back to Home"
                className="btn btn-primary mt-3"
              />
            </Link>
          </form>
        </div>
      );
    });
  }
}

export default ProfileScreen1;
