import request from "./request.js"
import {BlockForm} from "../type/block";


export function BlockAdd(data: BlockForm){
    return request({
        url:'/esg/ESGManagementOne/addNewChain',
        method:"POST",
        data
    })
}
export function ModifyBlock(data:BlockForm){
    return request({
        url:'/esg/ESGManagementOne/modify?id='+data.id,
        method:'PUT',
        data
    })
}
export function BlockDownload(){
    return request({
        url:'/esg/ESGDataTwo/getTemplate',
        method:"GET",
        responseType: 'blob'
    })
}
export function GetProfit(){
    return request({
        url:'/esg/ESGManagementOne/relationship',
        method:"GET"
    })
}

export function GetFile(){
    return request({
        url:'/esg/ESGManagementOne/esgFileList',
        method:"GET"
    })
}