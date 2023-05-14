import {CloudForm} from "./cloud";

export interface BlockForm{
    classification:string
    companyName:string

    stockCode:string

    id: number
}
interface selectDataInt{
    page:number,
    count:number,
    pagesize:number,
    classification:string
    companyName:string

    stockCode:string

    id: number
}
export class BlockData{
    ruleForm:selectDataInt={
        classification:"",
        companyName:"",
        stockCode:"",
        id:0,
        pagesize:10,
        page:1,
        count:200
    }
    list:BlockForm[]=[]
}