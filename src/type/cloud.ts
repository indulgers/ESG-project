import {ProjectForm} from "./writing";

export interface CloudForm{
    webServiceName:string
    createTime:string
    lastActiveTime:string
    syncPeriod:number
    periodUnit:number
    path:string
    companyId:number
    status:number
    companyName:string
    id:number
}
export interface EditForm{
    webServiceName:string
    createTime:string
    lastActiveTime:string
    syncPeriod:number
    periodUnit:number
    path:string
    companyId:number
    status:number
    id:number
}
interface selectDataInt{
    page:number,
    count:number,
    pagesize:number,
    webServiceName:string
    createTime:string
    lastActiveTime:string
    syncPeriod:number
    periodUnit:number
    path:string
    status:number
    companyName:string
    id:number
    companyId:number
}
export class CloudData{
    ruleForm:selectDataInt={
        webServiceName:"",
        companyId:0,
        createTime:"",
        lastActiveTime:"",
        syncPeriod:0,
        periodUnit:0,
        path:"",
        status:0,
        companyName:"",
        id:0,
        pagesize:10,
        page:1,
        count:200
    }
    list:CloudForm[]=[]
}
export class CloudEditData{
    ruleForm:EditForm={
        webServiceName:"",
        companyId:0,
        createTime:"",
        lastActiveTime:"",
        syncPeriod:0,
        periodUnit:0,
        path:"",
        status:0,
        id:0,
    }
    list:EditForm[]=[]
}
export interface FileForm{
    id:number
    companyId:number
    collectionTime:string
    ghgIntensity:number

    hazardousWaste:number

    nonHazardousWaste:number
    nox:number
    powerConsumption:number

    pmx:number
    sox:number
    totalPackagingMaterial:number
    waterConsumption:number
}
export class FileData{
    ruleForm:FileForm={
        id:0,
        companyId:0,
        ghgIntensity:0,
        hazardousWaste:0,
        nonHazardousWaste:0,
        nox:0,
        pmx:0,
        powerConsumption:0,
        sox:0,
        totalPackagingMaterial:0,
        waterConsumption:0,
        collectionTime:""
    }
    list:FileForm[]=[]
}