import axios from 'axios'
import { registerApiLoading, registerApiSuccess, registerApiFailure, } from './ActionCreators'
import { loginApiLoading, loginApiSuccess, loginApiFailure } from './ActionCreators'

export const registerApiCall = (data) => {
    console.log(data);
    return(dispatch)=>{
      dispatch(registerApiLoading());
      axios.post("http://localhost:7413/user/userRegister",data)
        .then((res)=>{
          if(res && res.data){
            dispatch(registerApiSuccess(res.data));
          } else {
            dispatch(registerApiFailure('Invalid response from API'));
          }
        })
        .catch((err)=>{
          if(err && err.response && err.response.data){
            dispatch(registerApiFailure(err.response.data));
          } else {
            dispatch(registerApiFailure('An error occurred while calling the API'));
          }
        });
    };
  };
  