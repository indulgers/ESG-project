<script setup>
import Aside from "../views/Aside.vue";
import {onMounted, provide, ref, watch, watchEffect} from "vue";
import Header from "../components/Header.vue";
import {loginStatus} from "../utilts/login.ts";

const companyInfo=ref({username:"",email:"",companyId:"",id:"",phone:""})

onMounted(()=>{
  loginStatus().then((res)=>{
    companyInfo.value=res.data.data
    console.log(companyInfo.value)
  })
})


</script>
<template>
<div >
  <el-container >

    <el-container class="header-main">
     <Header :companyInfo="companyInfo"></Header>
      <div class="mainer"> <Aside></Aside>
        <div class="main">
        <router-view :companyInfo="companyInfo"></router-view></div>
    </div>
    </el-container>
  </el-container></div>
  <v-chart></v-chart>
</template>
<style lang="scss" scoped>

.header-main{
  display: flex;
  flex-direction: column;
}
.mainer{
  display: flex;
  flex-direction: row;
  .main{
    width: 100%;
    display: flex;

    flex-direction: column;
    background: rgb(222, 230, 255) ;
    text-align: center;
  }
}
</style>