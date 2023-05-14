<template>
  <div style="display: flex; justify-content: center">
  <el-card shadow="hover" style="width: 90%;margin: 15px; " >
  <div class="chainManage"><el-image src="/src/assets/U.png"></el-image>
    <el-text tag="b" style="margin-left: 20px">我的联盟链</el-text></div>
  <div class="chainModel"><el-image src="/src/assets/ESGReporting.png"></el-image>
    <el-text type="primary" style="margin-left: 20px" @click="">查看更多</el-text></div>
  </el-card>
  </div>
  <div style="display: flex;justify-content: center">
  <el-card shadow="hover" style="width:90%;margin: 35px ">
    <div class="chainManage">
    <el-text tag="b" style="margin-right: 20px">联盟链管理</el-text>
    <el-button type="primary" @click="router.push('/index/profit')">开始</el-button>
    </div>
    <div class="cards">
    <el-card style="background-color:#f8f9fb;margin: 30px " >
      <div class="manage">
        <el-image src=""></el-image>
        <el-text type="primary">利益相关者管理</el-text>
      </div>
      <el-text>加入新链、管理原链、离开原链</el-text>
    </el-card>

    <el-card style="background-color:#f8f9fb;margin: 30px ">
      <div class="manage">
        <el-image src=""></el-image>
        <el-text type="primary">区块链上的数据</el-text>
      </div>
      <el-text>展示相关数据文件</el-text>
    </el-card>
    <el-card style="background-color:#f8f9fb;margin: 30px ">
      <div class="manage">
        <el-image src=""></el-image>
        <el-text type="primary">区块链上的文件</el-text>
      </div>
      <el-text >展示相关非数据文件</el-text>
    </el-card>
    </div>
  </el-card></div>
</template>

<script  setup>
import {ref} from "vue";
import router from "../../router/index.js";


</script>

<style lang="scss" scoped>
.chainManage{
  float: left;
  display: flex;
  align-items: center;

}
.cards{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
}
.chainModel{
  float: right;
  display: flex;
  align-items: center;
}
</style>