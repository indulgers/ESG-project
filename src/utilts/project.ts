import request from './request'
import {MemberForm, ProjectForm} from "../type/project";

export function ProjectGet(){
    return request({
        url:'/esg/ESGProjectThree/projectList',
        method:"GET",
    })
}
export function ProjectAdd(data:ProjectForm){
    return request({
        url:'/esg/ESGProjectThree/newProject',
        method:'POST',
        data
    })
}
export function ProjectEdit(data:ProjectForm){
    return request({
        url:'/esg/ESGProjectThree/updateProject',
        method:'PUT',
        data
    })
}
export function ProjectDelete(projectIds){
    return request({
        url:'/esg/ESGProjectThree/deleteProjects/{projectIds}',
        method:"DELETE"
    })
}
export function MemberGet(projectId){
    return request({
        url:'/esg/ESGProjectThree/getProjectMembers?projectId='+projectId,
        method:"GET",

    })
}
export function AddMember(data:MemberForm){
    return request({
        url:'/esg/ESGProjectThree/addMember',
        method:'PUT',
        data
    })
}
export function DeleMember(memberIds){
    return request({
        url:'/esg/ESGProjectThree/deleteMember/?memberIds='+memberIds,
        method:"DELETE"
    })
}
export function EditMember(data:MemberForm){
    return request({
        url:'/esg/ESGProjectThree/updateMember',
        method:"PUT",
        data
    })
}