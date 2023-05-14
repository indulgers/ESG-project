
export interface ProjectForm{
    id:number
    companyId:number
    projectName:string
    deadline:string
    esgStartDate:string
    esgEndDate:string
    projectStartDate:string
    status:number
    principalId:number
    counselorId:number
    principalName:string
    counselorName:string
}
export class ProjectData{
    ruleForm:ProjectForm={
        id:0,
        companyId:0,
        projectName:"",
        deadline:"",
        esgStartDate:"",
        esgEndDate:"",
        projectStartDate:"",
        status:0,
        principalId:0,
        counselorId:0,
        principalName:"",
        counselorName:""
    }
    list:ProjectForm[]=[]
}
export interface MemberForm{
    id:number
    companyId:number
    username:string
    password:string
    email:string
    phone:string
    role:number
}
interface selectDataInt{
    page:number,
    count:number,
    pagesize:number,
    id:number
    companyId:number
    username:string
    password:string
    email:string
    phone:string
    role:number
}
export class MemberData{
    ruleForm:selectDataInt={
        id:0,
        companyId:0,
        username:"",
        password:"",
        email:"",
        phone:"",
        role:0,
        pagesize:10,
        page:1,
        count:50
    }
    list:ProjectForm[]=[]
}