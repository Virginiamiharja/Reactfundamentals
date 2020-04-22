import React from "react";
import { connect } from "react-redux";
import {
  todoInputHandler,
  usernameHandler,
  todoAddHandler,
  loginHandler
} from "../../redux/actions";

class TodoReduxScreen extends React.Component {
  renderUserData = () => {
    return this.props.todo.todoList.map((data, index) => {
      return (
        <tr>
          <td> {index + 1} </td>
          <td> {data} </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="d-flex flex-column m-5 justify-content-center align-items-center">
        <h1>Hello, {this.props.todo.todoInput}</h1>
        <p> Testing 1 : {this.props.user.testing}</p>
        <p> Testing 1 : {this.props.user.testing2}</p>
        {/* <input
          type="text"
          className="form-control"
          placeholder="Input todo item"
          name=""
          id=""
          // Ini harus dimasukin kedalam connect ketika dia mau dijadiin action creator
          // onChange={e => todoInputHandler(e.target.value)}
          onChange={e => this.props.onChangeToDo(e.target.value)}
        />
        <input
          type="button"
          onClick={() => this.props.todoAddHandler(this.props.todo.todoInput)}
          className="btn btn-primary m-3"
          value="Add"
        /> */}
        <input
          type="button"
          onClick={this.props.onLogin}
          className="btn btn-success m-3"
          value="Testing 1"
        />
        <table>
          <thead>
            <tr>
              <td> No </td>
              <td> Nama </td>
            </tr>
          </thead>
          <tbody> {this.renderUserData()} </tbody>
        </table>

        {/* <input
          type="text"
          className="form-control mt-3"
          placeholder="Input user item"
          name=""
          id=""
          // Ini harus dimasukin kedalam connect ketika dia mau dijadiin action creator
          // onChange={e => todoInputHandler(e.target.value)}
          onChange={e => this.props.onChangeUsername(e.target.value)}
        /> */}
      </div>
    );
  }
}

// Ngeconnect reducers
const mapStateToProps = state => {
  return {
    todo: state.haha,
    user: state.user
  };
};

// Ngeconnect function2
const mapDispatchToProps = {
  onChangeToDo: todoInputHandler,
  onChangeUsername: usernameHandler,
  todoAddHandler,
  onLogin: loginHandler
};

// todoInputHandler itu namanya map dispatch to props
export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxScreen);
