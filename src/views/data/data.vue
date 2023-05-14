<template>
  <el-card shadow="hover" style="width:90%;margin: 35px ">
    <div class="cards">
      <el-card style="background-color:#f8f9fb;margin: 30px;width: 250px;height: 130px ">
        <div class="manage">
          <el-image src=""></el-image>
          <el-text type="primary">云服务</el-text>
        </div>
        <div class="dataMode">
        <el-text>查看API周期性拉取的数据</el-text>
        <el-button color="rgb(40, 85, 255)" @click="this.$router.push('/index/adapter/cloud')">开始</el-button></div>
      </el-card>

      <el-card style="background-color:#f8f9fb;margin: 30px;width: 250px;height: 130px ">
        <div class="manage">
          <el-image src=""></el-image>
          <el-text type="primary">数据文件</el-text>
        </div>
        <div class="dataMode">
        <el-text>通过数据模板导入数据</el-text>
        <el-button color="rgb(40, 85, 255)" @click="this.$router.push('/index/adapter/dataFile')">开始</el-button></div>
      </el-card>
      <el-card style="background-color:#f8f9fb;margin: 30px;width: 250px;height: 130px ">
        <div class="manage">
          <el-image src=""></el-image>
          <el-text type="primary">表格填写</el-text>
        </div>
        <div class="dataMode">
        <el-text >手动输入数据</el-text>
        <el-button color="rgb(40, 85, 255)" @click="this.$router.push('/index/adapter/fillTable')">开始</el-button></div>
      </el-card>
    </div>
  </el-card>
</template>

<script>
import {Calendar} from "@element-plus/icons-vue";


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
  justify-content: center;
  margin-top: 30px;
  .dataMode{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.chainModel{
  float: right;
  display: flex;
  align-items: center;
}
.el-button{
  width: fit-content;
  margin: 15px;
}
</style>