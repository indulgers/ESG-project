<template>
  <el-container>

      <el-container >
        <el-main style="height: fit-content">
          <el-card style="margin: 10px">
            <div class="head">
              <div class="fillBoard">
              <el-text style="word-break:keep-all;white-space:nowrap;float: left;color: #1a1a1a;font-weight: bold">ESG信息填写  项目基本信息</el-text>
              <el-divider ></el-divider>
              </div>
              <div class="toWrite"  @click="router.push('/index/writeManage/writeView')">
                <el-text style="margin: 5px 10px">进入写作</el-text>
               <el-image src="/src/assets/toWrite.png" style="width: 30px;height: 30px"
               ></el-image>
              </div>
            </div>
            <div class="writingInfo"  >
              <div class="writeItem">
                <el-text>公司名称</el-text>
                <div class="inputs">{{Profitdata.list[0].companyName}}</div>
              </div>
              <div class="writeItem">
                <el-text>项目名称</el-text>
                <div class="inputs">{{data.list[0].projectName}}</div>
              </div>
              <div class="writeItem">
                <el-text>行业分类</el-text>
                <div class="inputs">{{data.list[0].id}}</div>
              </div>
              <div class="writeItem">
                <el-text>项目顾问</el-text>
               <div class="inputs">{{data.list[0].counselorName}}</div>
              </div>
              <div class="writeItem">
                <el-text>项目负责人</el-text>
                <div class="inputs">{{data.list[0].principalName}}</div>
              </div>
              <div class="writeItem">
                <el-text>ESG年度</el-text>
                <div class="inputs">{{data.list[0].esgStartDate}}——{{data.list[0].esgEndDate}}</div>
              </div>
              <div class="writeItem">
                <el-text>开始时间</el-text>
                <div class="inputs">{{data.list[0].esgStartDate}}</div>
              </div>
              <div class="writeItem">
                <el-text>截止日期</el-text>
                <div class="inputs">{{data.list[0].deadline}}</div>
              </div>
              <div class="writeItem">
                <el-text>提交时间</el-text>
                <div class="inputs">{{data.list[0].esgEndDate}}</div>
              </div>
            </div>
        </el-card></el-main>
      </el-container>
    </el-container>

</template>

<script lang="ts" setup>
import {defineComponent, inject, onMounted, reactive, ref} from "vue";
import {GetProject} from "../../utilts/writing.ts";
import {ProjectData} from "../../type/writing";
import router from "../../router";
import {GetProfit} from "../../utilts/block.ts";
import {BlockData} from "../../type/block.ts";
const data=reactive(new ProjectData())
const dataForm=reactive(new ProjectData().ruleForm)
const Profitdata=reactive(new BlockData())
const props=defineProps({
      companyInfo:{
        type:Object
      }
    }
)

const projectData=reactive({id:"",companyId:"",projectName:'',deadline:'',esgStartDate:'',counselorId:'',esgEndDate:'',principalId:'',principalName:'',projecName:'',projectStartDate:'',status:''})
onMounted(()=>{
  GetProject().then((res)=>{
    data.list=res.data.data
    console.log(data)
    Object.assign(projectData,res.data.data)
    console.log(projectData)
    const companyInfo=props.companyInfo
    console.log({...props})
    console.log(props.companyInfo)
  })
  GetProfit().then((res)=>{
    Profitdata.list=res.data.data
  })
}
)


</script>

<style lang="scss" scoped>
.head{
  display: flex;
  flex-direction: column;
  .toWrite{
    display: flex;
    flex-direction: row;
    justify-content: right;
  }

}
.writingInfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .writeItem{
    display: flex;
    flex-direction: row;
    margin: 10px;
    flex-wrap: nowrap;
    word-break:keep-all;
    white-space:nowrap;
    .el-text{
      margin: 0 15px;
      color: #3f3f3f;
      font-weight: normal;
    }
    .inputs{
       height: 36px;
      display: flex;
       border-radius: 4px;
       border: 1px solid #dcdfe6;
       background-color: #fff;
       color: #2f3133;
       transition: border-color .2s cubic-bezier(.645,.045,.355,1);
       font-size: 14px;
       width:200px ;
      justify-self: center;
      margin: 5px;
      text-align: center;
      align-items: center;
      justify-content: center;
     }
  }
}

</style>