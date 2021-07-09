import React from "react";
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom'

 function Dashboard(props) {
  const {list:user,isLogin} = props;
  const history = useHistory()
  console.log(user,isLogin)
  if(isLogin === false){
     history.push('/login')
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">PhoneNo</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const getStateToProps = (state)=>{
    return{
        list:state.dashboard.list,
        isLogin:state.dashboard.isLogin
    }
}
export default connect(getStateToProps)(Dashboard)