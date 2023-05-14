export interface ProjectForm{
    id:number
    companyId:number,
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
interface selectDataInt{
    page:number,
    count:number,
    pagesize:number,
    id:number
    companyId:number,
    projectName:string,
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
    ruleForm:selectDataInt={
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
        counselorName:"",
        pagesize:10,
        page:1,
        count:50
    }
    list:ProjectForm[]=[]
}
export interface ChapterForm{
    id:number
    projectId:number
    number:string
    description:string
    degree:number
    kpiId:number
    status:number
    updateUserId:number
    updateTime:string
    chapterContent:string
    versionId:number
}
interface selectDataInt{
    page:number,
    count:number,
    pagesize:number,
    id:number
    projectId:number
    number:string
    description:string
    degree:number
    kpiId:number
    status:number
    updateUserId:number
    updateTime:string
    chapterContent:string
    versionId:number
}
export class ChapterData{
    ruleForm:selectDataInt={
        id:0,
        projectId:0,
        number:"",
        description:"",
        degree:0,
        kpiId:0,
        status:0,
        updateUserId:0,
        updateTime:"",
        chapterContent:"",
        versionId:0,
        pagesize:10,
        page:1,
        count:50
    }
    list:ChapterForm[]=[]
}