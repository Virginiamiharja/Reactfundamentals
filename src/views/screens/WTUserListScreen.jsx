import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class UserListScreen extends React.Component {
  state = {
    users: []
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

  renderUserData = () => {
    const { users } = this.state;
    return users.map((user, index) => {
      return (
        <tr>
          <td> {index + 1} </td>
          <td> {user.username} </td>
          <td> {user.fullName} </td>
          <td> {user.role} </td>
        </tr>
      );
    });
  };

  render() {
    const { users } = this.state;
    console.log(users);

    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h3 className="mt-5 mb-3"> All Users </h3>
        <table className="table" style={{ width: "80%" }}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Username</th>
              <th scope="col">Full Name</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>{this.renderUserData()}</tbody>
        </table>
      </div>
    );
  }
}

export default UserListScreen;
