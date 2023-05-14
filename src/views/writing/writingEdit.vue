<template>
  <dataBread></dataBread>
  <div class="container">

    <el-card style="display: flex;flex-direction: column">
      <el-text tag="b" style="font-size: 18px;float: left;">项目详情</el-text>
      <el-divider style="margin:40px 0 0 0"></el-divider>

      <div class="buttons">
        <el-button style="" @click="router.go(-1)" :icon="ArrowLeft"></el-button>
        <el-button style="" :icon="Check" @click="isDialogVisible=!isDialogVisible"></el-button>
        <el-button style="" :icon="Memo"></el-button>
      </div>
      <div class="tables">
        <div class="word">
        <el-text tag="b">报告简介</el-text>
        <el-text>报告编号</el-text>
        <el-text>学分</el-text>
        <el-text>相关KPI</el-text>

        <el-text tag="b" style="margin-top: 20px">相关数据 <br>A22</el-text>
        </div>
        <el-table
            ref="multipleTableRef"
            :data="tableData"
            style="width: 100%;background: #f0f0f0;margin-bottom: 30px"
            @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column label="Date" width="120">
            <template #default="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column property="name" label="Name" width="120" />
          <el-table-column property="address" label="Address" show-overflow-tooltip />
        </el-table>
        <div class="word">
        <el-text  tag="b">编辑章节内容</el-text></div>
        <el-input
            v-model="textarea"
            :rows="4"
            label="编辑章节内容"
            type="textarea"
            placeholder="请输入"
        />
      </div>
      <el-dialog v-model="isDialogVisible"  draggable style="width: 400px;height: 140px">
        <template #title>
          <el-text tag="b" style="font-size: 18px">确定要提交报告吗</el-text>
          <el-icon style="width: 20px;height: 20px"> <warning/></el-icon>
          <el-divider style="display: flex"></el-divider>
        </template>

        <span class="dialog-footer">
        <el-button type="primary" @click="Confirm">确认</el-button>
        <el-button type="warning" @click="isDialogVisible=!isDialogVisible">取消</el-button>
        </span>
      </el-dialog>

    </el-card>
  </div>
</template>

<script setup>
import {ArrowLeft, Check, Memo, Warning} from "@element-plus/icons-vue";
import router from "../../router/index.js";
const isDialogVisible=ref(false)
const activeName = ref('first')
const Confirm=()=>{
  isDialogVisible.value=false
  router.go(-1)
}
</script>

<style lang="scss" scoped>
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
.buttons{
  width: fit-content;
  margin: 15px;
}
.word{
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 15px;
}
.el-divider--horizontal{
  margin: 5px;
}
</style>