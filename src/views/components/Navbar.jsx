import React from "react";
// Ini biar gapake a href
import { Link } from "react-router-dom";

// Di react redux kan statenya global ini biar bisa dipake di navbar kita harus import
import { connect } from "react-redux";

// Untuk navbar nanti pakenya dari bawaan bootstrap untuk react namanya react strap
class Navbar extends React.Component {
  render() {
    return (
      <div
        className="d-flex align-items-center justify-content-around"
        style={{ height: "50px" }}
      >
        {/* Nah kalo disini gapake a karena katanya a itu ngerefresh page jadi ga single page app gitu loh*/}
        {/* <a href="/registration"> Registration </a>
                <a href="/counter"> Counter </a> */}
        {/* Kalo pake link dia cuma ganti component tapi ga ngerefresh */}
        <Link to="/registration"> Registration </Link>
        <Link to="/login"> Login </Link>
        <Link to="/userlist"> List of Users </Link>
        <Link to="/todo"> To Do Redux </Link>
        Hello {this.props.user}
      </div>
    );
  }
}

// Parameter state ini nyimpen object yang ada di component reducers/index
const mapStateToProps = state => {
  return {
    // Field didalam object ini bisa diakses menggunakan this.props
    todo: state.haha,
    user: state.user.username
  };
};

// export default Navbar;
export default connect(mapStateToProps)(Navbar);
