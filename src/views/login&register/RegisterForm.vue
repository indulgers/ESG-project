<template>
  <LoginHeader></LoginHeader>
  <div class="bg">
    <div class="register" style="width: 50vw; height: 100vh">
      <el-menu class="loginform">
        <el-image src="src/assets/leftlogin.png" style="width: 460px;height: 380px;margin:5px"></el-image>
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="60px"
            class="demo-ruleForm"
            :size="formSize"
            label-position="top"
        >
          <div class="hello">
            <el-image src="src/assets/triangle.png" style="width: 27px;height: 28px;margin-right: 15px"></el-image>
            <el-text>欢迎注册</el-text></div>
          <div class="regiform">
            <el-form-item label="公司名称" prop="companyName" >
              <el-input v-model="ruleForm.companyName" :suffix-icon="User" clearable placeholder="请输入您的账号（统一社会信用代码）" />
            </el-form-item>
            <el-form-item label="公司统一社会信用代码" prop="username">
              <el-input v-model="ruleForm.username"    :suffix-icon="Unlock" clearable placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password"   type="password" :suffix-icon="Unlock" clearable placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input v-model="ruleForm.checkPass"   type="password" :suffix-icon="Unlock" clearable placeholder="请输入密码"/>
            </el-form-item></div>
          <div class="footer">
            <el-button type="primary" class="buttonThree" @click="submitForm(ruleFormRef)">注册</el-button></div>
        </el-form>

      </el-menu></div></div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import {Unlock, User} from "@element-plus/icons-vue";
import LoginHeader from "../../components/LoginHeader.vue";
import {login, register} from "../../utilts/login";
import {RegisterData} from "../../type/login";
import {ElMessage} from "element-plus";
import router from "../../router";
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()


const ruleForm = reactive({
  username: '',
  companyName:'',
  password: '',
  checkPass:''
})

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入您的密码'))
  } else if (value !== ruleForm.password) {
    callback(new Error("您输入的两次密码不匹配!"))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  username: [
    {trigger:'blur'}
  ],
  companyName:[
     { required: true, message: '请输入您的活动名称', trigger: 'blur' },
    { min: 3,  message: '长度至少应该3位以上', trigger: 'blur' },
  ],
  password: [
    {
      validator:validatePass,
      trigger: 'blur',
    },
  ],
  checkPass:[{
    validator:validatePass2,
    trigger:'blur'
  }]

})
const data=reactive(new RegisterData());
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      delete ruleForm.checkPass
      console.log(ruleForm)
      register(ruleForm).then((res)=>{
          console.log(res)
      })
      ElMessage.success("您已注册成功")
      router.push('/loginform')
      console.log('submit!')
    } else {
      ElMessage.error("表单校验失败！")
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
.bg{
  background: url("/src/assets/loginbg.png") no-repeat;
  background-size: 100%;
  .register{
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
    font-size: 1px;
  }
}
.hello{
  display: flex;
  flex-direction:row;
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
  padding: 35px;
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