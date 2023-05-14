<script setup>
import { ref } from 'vue'
import {Avatar} from "@element-plus/icons-vue";
import router from "../router/index.js";

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<div class="navi">
  <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  :ellipsis="false"
  >
    <router-link to="/login"><div class="nDimg">
      <el-image  src="/src/assets/nD.png" fit='contain'/>
      </div></router-link>
    <div class="menuItem">
    <el-menu-item index="0">相关介绍</el-menu-item>
    <el-menu-item index="1">团队介绍</el-menu-item>
    <el-menu-item index="2">联系我们</el-menu-item>
    </div>
    <div class="right">
    <el-avatar    style="width: 35px;height: 35px"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <el-button class="topLogin" @click="router.push('/loginform')">登录</el-button></div>
    </el-menu>
</div>
</template>

<style lang="scss" scoped>
.navi{
  position: fixed;
  height: 45px;
  width: 100%;
  .menuItem{
    height: 45px;
    font-size: 28px;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;}

  .right{
    display: flex;
    flex-direction: row;
    height: 45px;
    margin: 0;
    .topLogin{
      background: rgb(40, 85, 255);
      padding: 10px;
      color: #eeeeee;
      margin-top: 5px;
    }
  }
  .nDimg{
    margin-top: 10px;
    el-image{
      -webkit-filter:blur(15px);
      -ms-filter:blur(15px);
      filter:blur(15px);
      width: 35px;
      height: 35px;
    }}
  }

</style>
