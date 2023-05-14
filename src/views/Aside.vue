<template>
  <el-aside  >
    <el-button-group v-model="isCollapse" style="margin-left:10px">
      <el-button @click="isCollapse=!isCollapse" style="border: none;background-color: transparent"><el-icon><Operation/></el-icon></el-button>
    </el-button-group>
    <el-menu
        default-active="/index/profit"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        active-text-color="#2855ff"
       collapse-transition
        router
    >
      <el-sub-menu >
        <template #title>
          <el-icon><HelpFilled /></el-icon>
          <span>区块链管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/block"><pre>•&nbsp; 联盟链</pre></el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="/index/data">
        <el-icon><Coin /></el-icon>
        <template #title>ESG数据管理</template>
      </el-menu-item>
      <el-menu-item index="/index/program">
        <el-icon><List /></el-icon>
        <template #title>ESG项目管理</template>
      </el-menu-item>
      <el-menu-item index="/index/writing" >
        <el-icon><EditPen /></el-icon>
        <template #title>ESG写作管理</template>
      </el-menu-item>
      <el-menu-item index="/index/comment">
        <el-icon><Menu/></el-icon>
        <template #title>ESG评价管理</template>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>
<script lang="ts" setup>
import router from "../router";

let isCollapse;
isCollapse=ref(false)
import {defineComponent, ref} from "vue";
import {Coin, Document, EditPen, HelpFilled, List, Location, Menu, Operation, Setting} from "@element-plus/icons-vue";


</script>
<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  width: fit-content;
  background-color: #ffffff;

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}

</style>