<template>
  <el-card style="margin: 20px 20px 0 20px">
    <el-breadcrumb separator=" > ">
      <el-breadcrumb-item v-for="(item,index) in breadcrumbList " :key="index" >
        {{item.meta.title}}
      </el-breadcrumb-item>

    </el-breadcrumb></el-card>
</template>

<script setup>
import {ArrowRight} from "@element-plus/icons-vue";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
const breadcrumbList = ref([])
const route=useRoute()
const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
  // 当前路由的完整路由表
  console.log(route.matched)
}
watch(
    route,
    () => {
      initBreadcrumbList()
    },
    { deep: true, immediate: true }
)
</script>

<style scoped>

</style>