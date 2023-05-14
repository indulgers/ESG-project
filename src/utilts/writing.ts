import request from "./request.js"
import {ProjectForm} from "../type/writing";

export function GetProject(){
    return request({
        url:'/esg/ESGProjectThree/projectList',
        method:"GET"
    })
}
export function GetChapter(projectId){
    return request({
        url:'/esg/ESGChapterFour/chapterListByProjectId?projectId=3',
        method:"GET"
    })
}
export function GetVersionChapter(versionId){
    return request({
        url:'/esg/ESGChapterFour/chapterListByVersionId?projectId=3',
        method:"GET"
    })
}