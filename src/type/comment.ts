import {ProjectForm} from "./writing";

export interface CommentForm{
    alpha:number
    beta:number
    classification1:string
    classification2:string

    companyName:string

    stockCode:string
    year:string

}
interface selectDataInt{
    page:number,
    count:number,
    pagesize:number,
    alpha:number
    beta:number
    classification1:string
    classification2:string

    companyName:string

    stockCode:string
    year:string
}
export class CommentData{
    ruleForm:selectDataInt={
        alpha:0,
        beta:0,
        classification1:"",
        classification2:"",
        companyName:"",
        stockCode:"",
        year:"",
        pagesize:10,
        page:1,
        count:50
    }
    list:CommentForm[]=[]
}
