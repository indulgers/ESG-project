<template>
  <el-header >

    <el-image src="/src/assets/nD.png" @click="router.push('/index/chain')"></el-image>
    <div class="select">
    <el-select v-model="value" class="m-2" placeholder="选择语言"  @change="changeLang">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      />
    </el-select></div>
    <el-dropdown>

      <span class="el-dropdown-link">
    <el-avatar :size="50" src="/src/assets/U.png" @click="" style="width: 35px;height: 35px;margin: 5px 10px"/>
      <el-text>{{ companyInfo.username}}</el-text>
      <el-icon class="el-icon--right">
        <ArrowDown/>
      </el-icon>
    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>


</template>
<script  setup>

import { useI18n } from "vue-i18n";
const { locale } = useI18n();
let isCollapse=ref(false)
import {defineComponent, onMounted, provide, ref} from "vue";
import {ArrowDown, Expand, Fold} from "@element-plus/icons-vue";
import router from "../router/index.js";
const value=ref('')
const options=[
  {
    value: 'en',
    label: '英文',
  },
  {
    value: 'zhCT',
    label: '中文繁体',
  },
  {
    value: 'zhCN',
    label: '中文简体'
  }
]
const logout=()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("TokenInfo")
  router.push('/login')

}
const changeLang = (val) => {
  console.log(val)
  locale.value = val;
  localStorage.setItem("lang", val);
}
const props=defineProps({
      companyInfo:{
        type:Object
      }
    }
)
onMounted(()=>{

  const companyInfo=props.companyInfo
  console.log({...props})
  console.log(companyInfo)
  provide('companyInfo',companyInfo)
})

</script>
<style lang="scss">
.el-header{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .el-icon{
    margin-right: 17px;
  }
  .select{
    margin-left: auto;
    margin-right: 0;
    width: 150px;
  }
}
.el-dropdown{
  margin-right: 0;
  .el-dropdown-link{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
