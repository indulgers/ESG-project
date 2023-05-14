<template>
  <dataBread></dataBread>
  <div class="container">

    <el-card>
      <el-text tag="b" style="font-size: 18px;float: left;" >项目详情</el-text>
      <el-divider style="margin:40px 0 0 0"></el-divider>

      <div class="buttons">
        <el-button style="" @click="router.go(-1)" :icon="ArrowLeft"></el-button>
        <el-button style="" :icon="Check" @click="router.push('/index/writeManage/writeOver/writeEdit')"></el-button>
        <el-button style="" @click="isDialogVisible=!isDialogVisible"><el-image src="/src/assets/writeEdit.png" style="width: 15px;height: 15px;border: none"></el-image></el-button>
      </div>
      <div class="tables" >
        <el-text style="display: flex;align-self: center; justify-self: center;margin: 20px 0 20px 0" tag="b">关于本报告</el-text>
          <el-table
              ref="multipleTableRef"
              :data="[data.list[0]]"
              style="width: 100%;"
          >
            <el-table-column label="id"  prop="id">
            </el-table-column>
            <el-table-column label="章节" prop="chapterContent"/>
            <el-table-column prop="updateTime" label="保存时间" />
            <el-table-column label="状态" prop="status" />
          </el-table>
        <el-text style="display: flex;align-self: center; justify-self: center;margin: 20px 0 20px 0" tag="b">公共核心章节</el-text>
        <el-table
            ref="multipleTableRef"
            :data="[data.list[1]]"
            style="width: 100%;background: #dad7d7"
        >
          <el-table-column label="id"  prop="id">

          </el-table-column>
          <el-table-column label="章节" prop="chapterContent"/>
          <el-table-column prop="updateTime" label="保存时间" />
          <el-table-column label="状态" prop="status" />
        </el-table>
        <el-text style="display: flex;align-self: center; justify-self: center;margin: 20px 0 20px 0" tag="b">公共可选择章节</el-text>
        <el-table
            ref="multipleTableRef"
            :data="[data.list[2]]"
            style="width: 100%;background: #dad7d7"
        >
          <el-table-column label="id" prop="id">

          </el-table-column>
          <el-table-column label="章节" prop="chapterContent"/>
          <el-table-column prop="updateTime" label="保存时间" />
          <el-table-column label="状态" prop="status" />
        </el-table>
        <el-text style="display: flex;align-self: center; justify-self: center;margin: 20px 0 20px 0" tag="b">行业核心章节</el-text>
        <el-table
            ref="multipleTableRef"
            :data="[data.list[3]]"
            style="width: 100%;"
        >
          <el-table-column label="id"  prop="id">

          </el-table-column>
          <el-table-column label="章节" prop="chapterContent"/>
          <el-table-column prop="updateTime" label="保存时间" />
          <el-table-column label="状态" prop="status" />
        </el-table>
        <el-text style="display: flex;align-self: center; justify-self: center;margin: 20px 0 20px 0 " tag="b">行业可选择章节</el-text>
        <el-table
            ref="multipleTableRef"
            :data="[data.list[4]]"
            style="width: 100%;background: #dad7d7"
        >
          <el-table-column label="id"  prop="id">
       
          </el-table-column>
          <el-table-column label="章节" prop="chapterContent"/>
          <el-table-column prop="updateTime" label="保存时间" />
          <el-table-column label="状态" prop="status" />
        </el-table>

      </div>
      <el-dialog v-model="isDialogVisible" title="2022年度ESG报告">
        <template #title>
          <el-text style="font-size: 18px" tag="b">2022年度ESG报告</el-text>
          <el-divider></el-divider>
        </template>
        <div style="display: flex;flex-direction: column">
          <el-text style="font-size: 16px" tag="b">关于本报告</el-text>
          <el-text style="font-size: 12px" >本报告具体是关于这些内容.....</el-text>
        </div>
        <div style="display: flex;flex-direction: column">
          <el-text style="font-size: 16px" tag="b">环境</el-text>
          <el-scrollbar><div style="font-size: 12px">
            H23304A11除温室气体以外的气体排放 <br>
            H23301A12温室气体排放 <br>
            assd <br>
            H23304A13有害废物排放 <br>
            H23304A14无害废物排放 <br>
            H23303A21能源资源使用 <br>
            d <br>
            H23303A22水资源使用 <br>
            1234 <br>
            H23304A25包装材料使用 <br>
            H23303A31环境及天然资源 <br>
            H23301A41气候变化 <br>
            H23304A11除温室气体以外的气体排放 <br>
            H23301A12温室气体排放 <br>
            assd <br>
            H23304A13有害废物排放 <br>
            H23304A14无害废物排放</div>
          </el-scrollbar>
        </div>
        <div style="display: flex;flex-direction: column">
          <el-text style="font-size: 16px" tag="b">社会</el-text>
          <el-text style="font-size: 12px" >本报告具体是关于这些内容.....</el-text>
        </div>
        <div style="display: flex;flex-direction: column">
          <el-text style="font-size: 16px" tag="b">政府</el-text>
          <el-text style="font-size: 12px" >本报告具体是关于这些内容.....</el-text>
        </div>
        <el-divider></el-divider>
      </el-dialog>

    </el-card>
  </div>
</template>

<script setup>
import {ArrowLeft, Check} from "@element-plus/icons-vue";
import {onMounted, reactive, ref} from "vue";
import {GetChapter} from "../../utilts/writing.ts";
import {ChapterData} from "../../type/writing.ts";
import router from "../../router/index.js";
const data=reactive(new ChapterData())
let projectId=3
const isDialogVisible=ref(false)
const titles=["关于本报告","公共核心章节","公共可选择章节","行业核心章节","行业可选择章节"]
const dataForm=reactive(new ChapterData().ruleForm)
onMounted(()=>{
  GetChapter(projectId).then((res)=>{
    data.list=res.data.data
    console.log(data.list)
    console.log(data.list[0])
  })
})

</script>

<style lang="scss" scoped>
.tables{
  display: flex;
  flex-direction: column;
  margin: 10px 20px 10px 0;
}
.container{
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.head{
  float: left;
  margin-bottom: 10px;
  font-size: 18px;
}
.info{
  float: left;
  display: flex;
  flex-direction: column;
  .comInfo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 12px;}
  .compStock{
    display: flex;
    flex-direction: row;
    margin: 5px 25px;
  }
}
.el-table-column{
  background-color: #f0f0f0;
}
.buttons{
  float: left;
}
.el-divider--horizontal{
  margin: 5px;
}
</style>