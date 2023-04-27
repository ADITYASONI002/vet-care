import { REG_API_LOADING,REG_API_SUCCESS,REG_API_FAILURE } from "./Types";
import { LOGIN_API_LOADING,LOGIN_API_SUCCESS,LOGIN_API_FAILURE } from "./Types";

export const registerApiLoading=()=>({
    type:REG_API_LOADING
})

export const registerApiSuccess=(data)=>({
    type:REG_API_SUCCESS,
    data
})
export const registerApiFailure=(err)=>({
    type:REG_API_FAILURE,
    err
})

export const loginApiLoading=()=>({
    type:LOGIN_API_LOADING
})

export const loginApiSuccess=(data)=>({
    type:LOGIN_API_SUCCESS,
    data
})
export const loginApiFailure=(err)=>({
    type:LOGIN_API_FAILURE,
    err
})