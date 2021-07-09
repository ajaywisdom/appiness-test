import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginA } from "../actions/dashboard.action";
import { useDispatch } from "react-redux";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    const valData = {
      username: "hruday@gmail.com",
      password: "hruday123",
    };
    let error = "";
    await props.dispatch(loginA(data));
  };
  const {isLogin} = props
  if(isLogin === true)
  history.push('/dashboard')
  return (
    <div className="container" style={{position:"absolute",top:"20%"}}>
      <form onSubmit={(e) => login(e)} style={{width:"30%",margin:"0 auto"}}>
        <div class="form-group">
          <label for="username">User Name</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Please Enter User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="text"
            class="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    message: state.dashboard.message,
    isLogin: state.dashboard.isLogin,
  };
};

export default connect(mapStateToProps)(Login);
