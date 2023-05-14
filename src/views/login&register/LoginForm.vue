<template>
  <LoginHeader></LoginHeader>
  <div class="bg">
  <div class="login" style="width: 50vw; height: 100vh">
 <el-menu class="loginform">
     <el-image src="src/assets/leftlogin.png" style="width: 460px;height: 380px;margin:5px"></el-image>
   <el-form
       ref="ruleFormRef"
       :model="ruleForm"
       :rules="rules"
       label-width="60px"
       class="demo-ruleForm"
       :size="formSize"

   >
     <div class="hello">
       <el-image src="src/assets/welLogin.png" style="width: 70px;height: 20px"></el-image>
       <el-text>账号密码登录</el-text></div>
     <el-form-item label="账号" prop="username">
       <el-input v-model="ruleForm.username" :suffix-icon="User" clearable placeholder="请输入您的账号（统一社会信用代码）" size="large"/>
     </el-form-item>
     <el-form-item label="密码" prop="password">
       <el-input v-model="ruleForm.password"   type="password" :suffix-icon="Unlock" clearable placeholder="请输入密码" size="large"/>
     </el-form-item>
     <div class="footer"><div class="insregi">
       <el-text tag="ins" size="small" @click="router.push('/registerform')">注册</el-text>&nbsp;
       <el-text tag="ins" size="small" @click="">?忘记密码</el-text></div>
       <el-button type="primary" class="buttonThree" @click="submitForm(ruleFormRef)" :loading="isLoading">登录</el-button></div>
   </el-form>
 </el-menu></div></div>
</template>

<script lang="ts" setup>
import {provide, reactive, ref} from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import {Burger, Unlock, User} from "@element-plus/icons-vue";
import LoginHeader from "../../components/LoginHeader.vue";
import {login, searchAll} from "../../utilts/login.js"
const formSize = ref('default')
import {LoginData} from "../../type/login.js"
import {ElMessage} from "element-plus";
import router from "../../router";
import {useTokenStore} from "../../store/token.js";
import {useRoute} from "vue-router";
const ruleFormRef = ref<FormInstance>()
const store=useTokenStore()
const  route=useRoute()
const isLoading=ref(false)
const ruleForm = reactive({
  username: '',
  password: '',
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入您的活动名称', trigger: 'blur' },
    { min: 3,  message: '名称至少应该3到5位', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: '请输入您的密码',
      min:3,max:20,
      trigger: 'blur',
    },
  ]

})
const data=reactive(new LoginData())
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    isLoading.value=true
    if (valid) {
        console.log(ruleForm)
      login(ruleForm).then((res)=>{
        console.log(res)
        if(res.data.code===1001){
        ElMessage.success("您已登录成功")
          store.saveToken(res.data.data)
        isLoading.value=false
        router.push((route.query.redirect as string)||"/index/chain")
        localStorage.setItem("token", res.data.data)}
        else{
          ElMessage.error("登录失败，请重新输入您的信息")
          isLoading.value=false
        }
      })

    } else {
      console.log('error submit!', fields)
      ElMessage.error('表单信息有误')
      isLoading.value=false
    }
  })
}
provide('companyInfo',ruleForm)
</script>

<style lang="scss" scoped>
.bg{
  background: url("/src/assets/loginbg.png") no-repeat;
  background-size: 100%;
  .login{
    margin-left: 350px;
    padding-top: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
.demo-ruleForm{
  box-shadow: 0 0 25px #b6b8d3;
  padding: 65px;
  margin: 1px 20px;
  width: 300px;
  :deep(.el-input input::placeholder){
  font-size: 4px;
  }
}
.hello{
  display: flex;
  flex-direction: column;
  font-family:"微软雅黑","黑体","宋体",serif;
  align-items: center;
  .el-text{
    margin: 10px 0 10px 0;

  }
}
.loginform{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 65px 45px;
  margin: 0 15px;
  width: auto;
  height: fit-content;
  .buttonThree{
    padding: 15px;
  }
}
.footer{
  display: flex;
  flex-direction: column;
  .insregi{
  margin: 5px 0 15px 170px;
  }
}
</style>