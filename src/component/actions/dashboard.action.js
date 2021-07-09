import { LOGIN, USER_LIST } from "../constant/dashboard.constant";

export const loginA = (data) => {
  return (dispatch) => {
      console.log("ACtions",data)
    const valData = {
      username: "hruday@gmail.com",
      password: "hruday123",
    };
    let message = "";
    if (data.username === valData.username) {
      if (data.password == valData.password) {
        message = "Login Successfully";
       return dispatch(loginRed(message));
      } else {
        message = "Password Doesnt match";
       return  dispatch(loginRed(message));
      }
    } else {
      message = "userNam Doesnt match";
     return dispatch(loginRed(message));
    }
  };
};

//Sending action request to reducers
export const loginRed = (data) => ({
  type: LOGIN,
  payload: data,
});
