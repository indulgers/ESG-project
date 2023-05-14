<template>
<el-dialog v-model="dialogVisble" title="" draggable>

    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </template>


</el-dialog>
</template>

<script setup>
import {ref} from "vue";
const dialogVisble = ref(false)
function confirm() {
  ElMessageBox.confirm('确定关闭吗?').then(() => {
    console.log('你点击了确定按钮')
    dialogVisble.value = false
  }).catch(() => { })
}

function close() {
  dialogVisble.value = false
}

defineExpose({
  dialogVisble
})
</script>

<style scoped>

</style>