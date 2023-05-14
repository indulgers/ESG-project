
import request from "./request.js"
import {CloudForm, EditForm, FileForm} from "../type/cloud";


export function BlockGet(){
    return request({
        url:'/esg/ESGDataTwo/web-service',
        method:"GET",
    })
}
export function AddCloud(data:CloudForm){
    return request({
        url:'/esg/ESGDataTwo/addWeb-service',
        method:"POST",
        data
    })
}
export function EditCloud(data:EditForm){
    return request({
        url:'/esg/ESGDataTwo/modifyWeb-service',
        method:"PUT",
        data
    })
}
export function DelCloud(id){
    return request({
        url:'/esg/ESGDataTwo/deleteWeb-service?id='+id,
        method:"DELETE"
    })
}
export function FormSubmit(data:FileForm){
    return request({
        url:'/esg/ESGDataTwo/formWritren',
        method:"POST",
        data
    })
}
