import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class ProfileScreen extends React.Component {
  state = {
    usersList: []
  };

  getDataHandler = () => {
    //   Request GET by ID dan ID diletakan di / milik nama table namanya id params
    // Link ini bisa disimpen di variable yang berbeda
    // Axios.get("http://localhost:3001/users/1")
    //   .then(res => {
    //     // Res ini response dari API
    //     console.log(res);
    //     // Kan ini datanya udh diambil, trs disimpen di state
    //     this.setState({ usersList: res.data });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    //   Dikasih parameter kedua dan harus berbentuk object makanya pake {} trs dikasih key namanya params, dan ini namanya query params
    //   Query params ini adalah object dan isi nya itu field yang mau ditemuin
    // Axios.get("http://localhost:3001/users", {
    //   params: {
    //     username: "virgi"
    //     // role: "admin"
    //   }
    // })
    //   .then(res => {
    //     // Res ini response dari API
    //     console.log(res);
    //     // Kan ini datanya udh diambil, trs disimpen di state
    //     this.setState({ usersList: res.data });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    console.log("Bukan axios");
  };

  deleteDataHandler = () => {
    //   Ini local host 3001 nya udh dijadiin variable ditaro di file API.js
    //   Delete ini cuma nerima id doang gabisa query param
    //   Dan ketika kita delete dri sini, di file db.json otomatis udh kehapus juga
    Axios.delete(`${API_URL}/users/1`)
      .then(res => {
        // Res ini response dari API
        console.log(res);
        // Kan ini datanya udh diambil, trs disimpen di state
        this.setState({ usersList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  postDataHandler = () => {
    // Nah disini objectnya ga harus kaya yg di get krn object disini yang akan dimasukin ke table users
    // Trs kita ga harus nyediain ID karena si ID akan disediain langsung sama si json server
    Axios.post(`${API_URL}/users`, {
      username: "Bill",
      password: "123",
      fullName: "Bill Clinton",
      role: "user"
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <h2> Welcome, {this.props.match.params.username} </h2>
        <input
          type="button"
          value="Get data"
          onClick={this.getDataHandler}
          className="btn btn-success"
        />
        <input
          type="button"
          value="Delete data"
          onClick={this.deleteDataHandler}
          className="btn btn-danger"
        />
        <input
          type="button"
          value="Post data"
          onClick={this.postDataHandler}
          className="btn btn-warning"
        />
      </div>
    );
  }
}

export default ProfileScreen;
