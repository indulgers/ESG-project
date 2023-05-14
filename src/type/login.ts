export interface LoginForm{
    username:string
    password:string
}
export class LoginData{
    ruleForm:LoginForm={
        username:"",
        password:""
    }
}

export interface RegisterForm{
    companyName:string

    username:string
    password:string
}
export class RegisterData{
    ruleForm:RegisterForm={
        companyName:"",
        username:"",
        password:""
    }
}