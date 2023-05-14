<template>
  <data-bread style="margin: 15px"></data-bread>
  <el-card style="margin: 15px">
  <div >
    <el-row :gutter="20">
      <el-col :span="24" style="text-align: left">
        <el-button @click="handleAdd" :icon="Plus">新增</el-button>
        <el-button @click="handleEdit" :icon="Edit">修改</el-button>
        <el-button @click="handleListDel" :icon="Delete">删除</el-button>
      </el-col>
    </el-row>
    <br />
    <div >
        <!--query 查询-->
        <!--table 表格-->
        <div class="table">
        <el-table :data="dataList.comList"  border @selection-change="handleSelectionChange"
                  ref="multipleTableRef" style="width: fit-content;" >
          <el-table-column type="selection" width="55" />
          <el-table-column prop="id" label="序号" width="120">
          </el-table-column>
          <el-table-column prop="webServiceName" label="服务名称" width="120">
            <template #default="scope">
              <div >
                <el-image src="/src/assets/cloudUpload.png" style="width: 16px;height: 16px"></el-image>
                <span style="margin-left: 5px">{{ scope.row.webServiceName }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="180" />
          <el-table-column prop="syncPeriod" label="SYNC周期" width="120" />
          <el-table-column prop="companyId" label="公司" width="120">
            <template #default="scope">
              <div >
                <el-image src="/src/assets/compUser.png" style="width: 16px;height: 16px"></el-image>
                <span style="margin-left: 5px">{{ scope.row.companyId }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="lastActiveTime" label="最后活动时间" width="180" />
          <el-table-column prop="path" label="路径" width="300" />
          <el-table-column prop="status" label="状态" width="60" />
        </el-table></div>
        <el-pagination
            background
            :current-page="dataForm.page"
            :total="dataForm.count"
            layout="prev, pager, next"
            :page-size="dataForm.pagesize"
            @size-change="sizeChange"
            @current-change="currentChange"
        />

    </div>
  </div>        <!--dialog 弹窗-->
    <el-dialog v-model="dialogFormVisible" :title="dialogType === 'add' ? '新增云服务主机' : '编辑云服务主机'" draggable>
      <el-form :model="EditForm" label-width="auto">
        <el-form-item label="服务器名称">
          <el-input v-model="EditForm.webServiceName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input v-model="EditForm.createTime" autocomplete="off" />
        </el-form-item>
        <el-form-item label="SYNC周期">
          <el-input v-model="EditForm.syncPeriod" autocomplete="off" />
        </el-form-item>
        <el-form-item label="最后活动时间">
          <el-input v-model="EditForm.lastActiveTime" autocomplete="off" />
        </el-form-item>
        <el-form-item label="路径">
          <el-input v-model="EditForm.path" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogConfirm">确认</el-button>
          <el-button type="warning" @click="dialogQuit">取消</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="DeleteVisible" title='您确认是否删除该云服务主机' draggable>
        <span class="dialog-footer">
          <el-button type="primary" @click="DeleteConfirm">确认</el-button>
          <el-button type="warning" @click="DeleteVisible=!DeleteVisible">取消</el-button>
        </span>
    </el-dialog>
  </el-card>

</template>

<script lang="ts" setup>
import {
  ref,
  getCurrentInstance,
  defineProps,
  onMounted,
  defineEmits,
  defineExpose,
  watch,
  watchEffect,
  reactive, inject, computed, toRefs
} from "vue";
import { ElMessage } from "element-plus";
import DataBread from "../../components/dataBread.vue";
import {Delete, Edit,Plus} from "@element-plus/icons-vue";
import {BlockDownload} from "../../utilts/block.ts";
import {AddCloud, BlockGet, DelCloud, EditCloud} from "../../utilts/cloud.ts";
import {CloudData, CloudEditData} from "../../type/cloud.ts";
const props = defineProps(["loading", "hasSearch", "defaultData", "thingCode"]);
const emits = defineEmits(["save"]);
const { loading, hasSearch, defaultData, thingCode } = toRefs(props);
const data=reactive(new CloudData())
const SelectedId=ref(0)
const dataForm=reactive(new CloudData().ruleForm)
const EditForm=reactive(new CloudEditData().ruleForm)
const Profitdata=reactive(new CloudData())
const ProfitdataForm=reactive(new CloudData().ruleForm)
onMounted(()=>{
    BlockGet().then((res)=>{
      data.list=res.data.data
      console.log(data.list)
      data.ruleForm.count=res.data.data.length
  })
})
const queryInput = ref("")
const multipleTableRef=ref()
const multipleSelection = ref([]);//多选
const dialogFormVisible = ref(false);//是否打开
const DeleteVisible=ref(false);
const dialogType = ref("add")
//监控数据
watch(queryInput, (val) => {

})

//选择事件
const handleSelectionChange = (val) => {
  multipleSelection.value = [];

  val.forEach(item => {
    EditForm.webServiceName=item.webServiceName
    EditForm.createTime=item.createTime
    EditForm.syncPeriod=item.syncPeriod
    EditForm.lastActiveTime=item.lastActiveTime
    EditForm.path=item.path
    EditForm.id=item.id
    EditForm.companyId=item.companyId
    multipleSelection.value.push(item.id)
  });
}
//添加按钮
const handleAdd = (val) => {
  dialogType.value = "add"
  dialogFormVisible.value = true
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
//编辑按钮
const handleEdit = (id) => {

  dialogType.value = "edit"
  dialogFormVisible.value = true

}
const DeleteConfirm = () => {
  DelCloud(SelectedId.value).then((res)=>{
    console.log(res)
  })
  let index = data.list.findIndex(item => item.id === SelectedId.value)
  data.list.splice(index, 1)
  DeleteVisible.value=false
  ElMessage({
    message:'您已删除成功',
    type:'success'
  })
}

//删除一条按钮
const handleRowDel = (id) => {
  SelectedId.value=id
  console.log(id)
  DeleteVisible.value=true
}

//删除多条
const handleListDel = () => {
  multipleSelection.value.forEach(id => {
    handleRowDel(id)
  })
  multipleSelection.value = [];
  ElMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'success',
  })
}
const dialogQuit = () => {
  dialogFormVisible.value = false
  Object.assign(dataForm, {});
}
//确认按钮
const dialogConfirm = () => {


  EditForm.periodUnit=1
  EditForm.status=1
  if (dialogType.value === 'add') {
    Object.assign(dataForm,EditForm)
    console.log(dataForm)
    dataForm.companyName="白磊有限公司"
    console.log(dataForm)
      AddCloud(dataForm).then((res)=>{
        console.log(res)
        if(res.data.code==1001){
          ElMessage({
          message: '添加云主机成功！',
          type: 'success',
        })}

      })
  } else {
    console.log(EditForm)
   EditCloud(EditForm).then((res)=>{
     console.log(res)
     ElMessage({
       message: '修改云主机成功！',
       type: 'success',
     })
   })
  }
  dialogFormVisible.value = false
   Object.assign({}, new CloudData().ruleForm)
}
const dataList=reactive({
  comList:computed(()=>{
    return data.list.slice((data.ruleForm.page-1)*data.ruleForm.pagesize,data.ruleForm.page*data.ruleForm.pagesize)
  })
})
const currentChange=(page:number)=>{
  data.ruleForm.page=page
  dataForm.page=page
}
const sizeChange=(pagesize:number)=>{
  data.ruleForm.pagesize=pagesize
  dataForm.pagesize=pagesize
}
</script>

<style lang="scss">
.fill-p {
  display: inline-block;
  width: 100%;
  height: 24px;
}
.el-button{
  border: none;
}
.table{
  display: flex;
  margin: 15px;
  justify-content: center;
  align-items: center;
}
</style>
