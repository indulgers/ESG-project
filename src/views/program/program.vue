<template>
  <el-container>
    <el-header style="display: flex;margin: 80px 30px 0 0"><el-card style="width: 100%;padding:0 15px 15px 15px;margin: 30px 0">
      <el-text tag="b" class="head">公司信息</el-text>
      <el-divider></el-divider>
      <div class="info">
        <div class="compStock">
          <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;">公司名称</el-text>
          <el-input
              v-model="dataForm.companyName"
             :value="dataForm.esgStartDate"
              :suffix-icon="ArrowDown"
          />
        </div>
        <div class="compStock">
          <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;">股票代码</el-text>
          <el-input disabled></el-input>
        </div>
        <div class="compStock">
          <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;">行业分类</el-text>
          <el-input disabled></el-input>
        </div>
      </div>
    </el-card></el-header>
    <el-container>

      <el-container >
        <el-main style="margin-top: 50px"><el-card>
         <el-text tag="b" style="font-size: 18px;float: left;">ESG写作列表</el-text>
          <el-divider></el-divider>
          <div class="buttons">
          <el-button style="" @click="handleAdd"><el-icon  style="width: 21px;height: 21px"><plus/></el-icon></el-button>
            <el-button style="" @click="handleEdit"><el-icon  style="width: 21px;height: 21px"><edit/></el-icon></el-button>
            <el-button style="" @click="toDetail"><el-icon  style="width: 21px;height: 21px"><folder/></el-icon></el-button>
            <el-button style="" @click="handleListDel"><el-icon style="width: 21px;height: 21px"> <delete/></el-icon></el-button>
        </div>
          <el-table
              ref="multipleTableRef"
              :data="data.list"
              style="width: 100%"
              @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column property="projectName" label="项目名称" width="120">
              <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column property="principalName" label="项目负责人" width="120" />
            <el-table-column property="counselorName" label="项目顾问" show-overflow-tooltip />
            <el-table-column property="projectStartDate" label="开始时间" />
            <el-table-column property="deadline" label="截止时间"/>
            <el-table-column label="ESG年度">
              <template #default="scope">
             <span> {{scope.row.esgStartDate}}—— {{scope.row.esgEndDate}}</span>
            </template></el-table-column>

            <el-table-column label="项目状态"/>
          </el-table>
          <el-dialog v-model="dialogFormVisible" :title="dialogType === 'add' ? '添加新项目' : '修改项目'" draggable>
            <el-form :model="dataForm" label-width="auto">
              <el-form-item label="项目截止日期">
                <el-input v-model="dataForm.deadline"  />
              </el-form-item>
              <el-form-item label="ESG年度结束日期" >
                <el-input v-model="dataForm.esgEndDate"  />
              </el-form-item>
              <el-form-item label="ESG年度开始日期">
                <el-input v-model="dataForm.esgStartDate"  />
              </el-form-item>
              <el-form-item label="项目名称">
                <el-input v-model="dataForm.projectName"  />
              </el-form-item>
            </el-form>
            <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogConfirm">确认</el-button>
          <el-button type="warning" @click="dialogFormVisible=!dialogFormVisible">取消</el-button>
        </span>
            </template>
          </el-dialog>
          <el-pagination
              v-model:current-page="currentPage3"
              v-model:page-size="pageSize3"
              :small="small"
              :disabled="disabled"
              :background="background"
              layout="prev, pager, next, jumper"
              :total="1000"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
          />
          <el-dialog v-model="dialogFormVisible" :title="dialogType === 'add' ? '新增' : '编辑'" draggable>
            <el-form :model="data" label-width="auto">
              <el-form-item label="姓名">
                <el-input v-model="tableData.name" autocomplete="off" />
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="tableData.email" autocomplete="off" />
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="tableData.address" autocomplete="off" />
              </el-form-item>
            </el-form>
            <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogConfirm">确认</el-button>
        </span>
            </template>
          </el-dialog>
          <el-dialog v-model="DeleteVisible" title='您确认是否删除该云服务主机' draggable>
        <span class="dialog-footer">
          <el-button type="primary" @click="DeleteConfirm">确认</el-button>
          <el-button type="warning" @click="DeleteVisible=!DeleteVisible">取消</el-button>
        </span>
          </el-dialog>
        </el-card></el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script  setup>
import {onMounted, reactive, ref, watch} from 'vue'
import {ElMessage, ElTable} from 'element-plus'
import {ArrowDown, Delete, Edit, Folder, Plus} from "@element-plus/icons-vue";
import {useRoute} from "vue-router";
import {ProjectAdd, ProjectDelete, ProjectEdit, ProjectGet} from "../../utilts/project";
import router from "../../router";
import {ProjectData} from "../../type/project";
const data=reactive(new ProjectData())
const dataForm=reactive(new ProjectData().ruleForm)
const multipleTableRef = ref(null)
const selectedData = ref([]);
const SelectedId=ref(0)
const DeleteVisible=ref(false)
const selectedRows=ref([])
onMounted(()=>{
  ProjectGet().then((res)=>{
    data.list=res.data.data
    console.log(data.list)
    const companyInfo=props.companyInfo
  })
})
const props=defineProps({
      companyInfo:{
        type:Object
      }
    }
)
const multipleSelection = ref([]);//多选
const dialogFormVisible = ref(false);//是否打开
const dialogType = ref("add")
//监控数据
// watch(queryInput, (val) => {
//   if (val.length > 0) {
//     tableData.value = tableData.value.filter(item => item.name.toLowerCase().match(val.toLowerCase()));
//   } else {
//     tableData.value = tableDataCopy;
//   }
// })
const toDetail=()=>{
  if (selectedData.value.length === 0) {
    console.log('请先选择一行数据');
    return;
  }
  // 传递选中行数据
  console.log(selectedData.value);
  router.push({
    path:'/index/writeList/viewDetail',
    query: { data: JSON.stringify(selectedData.value) }
  })
}
//选择事件
const handleSelectionChange = (val) => {
  multipleSelection.value = [];

  val.forEach(item => {
    dataForm.deadline=item.deadline
    dataForm.esgStartDate=item.esgStartDate
    dataForm.esgEndDate=item.esgEndDate
    dataForm.projectName=item.projectName
    multipleSelection.value.push(item.id)
  });
}
//添加按钮
//编辑按钮
const handleEdit = (val) => {
  dataForm.value = {}
  dialogType.value = 'manage'
  console.log(dialogType.value)
  dialogFormVisible.value = true
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
}
const handleAdd = (val) => {
  dataForm.value = {}
  dialogType.value = 'add'
  console.log(dialogType.value)
  dialogFormVisible.value = true

}
//确认按钮
const dialogConfirm = () => {
  if (dialogType.value === 'add') {
    console.log(dataForm)
    ProjectAdd(dataForm).then((res)=>{
      console.log(res)
      ElMessage({
        message: '您已添加成功',
        type: 'success',
      })
    })
  } else {
    console.log(dataForm)
    ProjectEdit(dataForm).then((res)=>{
      console.log(res)
      ElMessage({
        message: '您已修改成功',
        type: 'success',
      })
    })
  }
  dialogFormVisible.value = false
}

const DeleteConfirm = () => {
  ProjectDelete(SelectedId.value).then((res)=>{
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
</script>

<style lang="scss" scoped>
.head{
  float: left;
  margin-bottom: 10px;
  font-size: 18px;
}
.info{
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
  .compStock{
    display: flex;
    flex-direction: row;
    margin: 5px 25px;
  }
}
.buttons{
  float: left;
  .el-button{
    margin: 0;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>