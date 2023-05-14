
import request from "./request.js"
import {CommentForm} from "../type/comment";


export function CommentGet(data:CommentForm){
    return request({
        url:'/esg/ESGEstimateFive/list',
        method:"GET",
    })
}
    