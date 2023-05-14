import request from "./request.js";
import {UnwrapRef} from "vue";
import {LoginData, LoginForm,  RegisterForm} from "../type/login";

export function login(data: LoginForm){
    return request({
        url:'/user/login?password='+data.password+'&username='+data.username,
        method:"GET",
        data

    })
}
export function register(data: RegisterForm){
    return request({
        url:'/user?companyName='+data.companyName+'&username='+data.username+'&password='+data.password,
        method:"POST",
        data

    })
}export function searchAll(){
    return request({
        url:'/user/all',
        method:"GET",

    })
}
export function loginStatus(){
    return request({
        url:'/user/status',
        method:"GET",
        headers:{
            token:localStorage.getItem("token")
        }

    })
}