import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {ElMessage} from "element-plus";

export const useTokenStore=defineStore("token",()=>{
    const tokenJson=ref("")

    const token=computed(()=>{
        try{
            return JSON.parse(tokenJson.value||window.localStorage.getItem("TokenInfo")||"{}")
        }catch (err){
            window.localStorage.setItem("TokenInfo","")
            throw  err
        }
    })
    function saveToken(data: string){
        tokenJson.value=data
        window.localStorage.setItem("TokenInfo",data)
    }

    return{token, saveToken}
})