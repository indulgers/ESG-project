<template>
  <LoginHeader></LoginHeader>
  <div class="bg">
  <div class="form">
    <div style="width: 50vw; height: 100vh">
      <div class="desc">
      <div class="desc1">
        <text>环境 社会 管制信息 <br>
        多维区块链平台</text></div>
      <div class="desc2">
        <text>
          nd blockchain for ESG reporting
        </text>
      </div>
        <div class="loginButton">
      <el-button type="default" @click="router.push('/loginform')"><div class="loginText">登录</div></el-button>
        </div>

      </div>

<!--      <v-chart :option="option" autoresize :loading="false" />-->
<!--      <button @click="updateData">更新数据</button>-->
    </div>
    <div class="loginformer" v-show="showForm">
      <LoginForm ></LoginForm>
    </div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VChart from 'vue-echarts';
import LoginForm from "./LoginForm.vue";
import LoginHeader from "../../components/LoginHeader.vue";
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import router from "../../router";

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const option=reactive({
  xAxis:{
    data:["2015","2016","2017","2018","2019","2020"],
  },
  yAxis:{},
  series:{
    data:[220,100,350,280,170,310,30],
    type:"bar",
  }
})
const updateData = () => {
  option.series.data = [120, 10, 50, 380, 70, 210, 230]; //可以

  // option.series = {
  //   data: [120, 10, 50, 380, 70, 210, 230],
  // }; //也可以
}

const showForm=ref(false)
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))


</script>

<style lang="scss" scoped>
.form{
  margin: 0;
  padding-top: 45px;
  display: flex;
  flex-direction: row;
    .desc {

      margin: 40px 0 0 40px;

      .desc1 {
        line-height: 60px;
        letter-spacing: 1.5px;
        font-size: 40px;
        color: #eeeeee;
        font-weight: bold;
      }

      .desc2 {
        margin-top: 20px;
        line-height: 25px;
        font-size: 25px;
        color: rgb(195, 198, 228);
        font-weight: bold;
      }

      .loginButton {
        margin-top: 20px;
        padding: 5px;

        .loginText {
          color: rgb(14, 18, 107);
          padding: 0 20px;
        }
      }


    }
    .loginformer{
      margin: 140px 50px 0 40px;
    }

}
.bg{
  background: url("/src/assets/loginbg.png") no-repeat;
  background-size: 100%;

}
</style>