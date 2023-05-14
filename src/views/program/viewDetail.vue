<template>
  <dataBread></dataBread>
  <div class="container">
    <el-card style="width: 100%;margin-bottom:25px ">
      <el-text tag="b" class="head">项目概览</el-text>
      <el-divider style="margin:40px 0 0 0"></el-divider>
      <div class="info">
      <div class="comInfo">
        <div class="compStock">
          <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;">项目名称</el-text>
          <el-input
              v-model="selectedData.projectName"
              :suffix-icon="ArrowDown"
          />
        </div>
        <div class="compStock">
          <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;" placeholder="Hanbo"> 公司名称</el-text>
          <el-input   disabled></el-input>
        </div>
        <div class="compStock">
          <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;" aria-placeholder="7832312">股票代码</el-text>
          <el-input disabled></el-input>
        </div>
      </div>
      <div class="comInfo">
        <div class="compStock">
          <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;">行业分类</el-text>
          <el-input
              placeholder="计算机行业"
              :suffix-icon="ArrowDown"

          />
        </div>
        <div class="compStock">
          <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;">项目状态</el-text>
          <el-input disabled v-model="selectedData.status"></el-input>
        </div>
        <div class="compStock">
          <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;">截止日期</el-text>
          <el-input disabled v-model="selectedData.deadline"></el-input>
        </div>
      </div>
      <div style="display: flex;flex-direction: row;">
        <div class="compStock">
          <el-text style="margin-left: -10px;word-break:keep-all;white-space:nowrap;">项目负责人</el-text>
          <el-input
              :suffix-icon="ArrowDown"
              v-model="selectedData.principalName"
          />
        </div>
        <div class="compStock" style="">
          <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;">项目顾问</el-text>
          <el-input disabled  v-model="selectedData.counselorName"></el-input>
        </div>

      </div>
        <div style="display: flex;flex-direction: row">
          <div class="compStock">
            <el-text style="margin-right: 5px;word-break:keep-all;white-space:nowrap;">ESG年度</el-text>
            <el-input
                :suffix-icon="ArrowDown"
                v-model="selectedData.esgStartDate"
            />
            <el-input style="margin-left: 20px"
                :suffix-icon="ArrowDown"
                      v-model="selectedData.esgEndDate"
            />
          </div>
          </div>
        </div>

    </el-card>

    <el-card>
          <el-text tag="b" style="font-size: 18px;float: left;">项目详情</el-text>
          <el-divider style="margin:40px 0 0 0"></el-divider>
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="项目成员" name="first">
              <div class="buttons">
                <el-button style="" @click="handleAdd">
                  <el-icon style="width: 21px;height: 21px"> <Plus/></el-icon>
                  </el-button>
                <el-button style="" @click="handleEdit">
                  <el-icon style="width: 21px;height: 21px"><Edit/></el-icon>
                </el-button>
                <el-button style="" @click="handleListDel">
                  <el-icon>
                    <el-icon style="width: 21px;height: 21px"> <Delete/></el-icon>
                  </el-icon>
                </el-button>
              </div>
              <el-table :data="dataList.comList"  border @selection-change="handleSelectionChange"
                        ref="multipleTableRef" style="width: 100%;">
                <el-table-column type="selection" width="55" />
                <el-table-column prop="username" label="姓名">
                </el-table-column>
                <el-table-column prop="phone" label="联系电话" >
                </el-table-column>
                <el-table-column prop="email" label="邮箱"/>
                <el-table-column prop="role" label="角色"  />
              </el-table>
              <el-pagination
                  background
                  style="margin-top: 15px"
                  :current-page="dataForm.page"
                  :total="dataForm.count"
                  layout="prev, pager, next"
                  :page-size="dataForm.pagesize"
                  @size-change="sizeChange"
                  @current-change="currentChange"
              /></el-tab-pane>
            <el-tab-pane label="写作进度" name="second">
              <div class="buttons">
                <el-button style="" @click="handleAdd">
                  <el-icon style="width: 21px;height: 21px"> <Plus/></el-icon>
                </el-button>
                <el-button style="" @click="handleEdit">
                  <el-icon style="width: 21px;height: 21px"><Edit/></el-icon>
                </el-button>
                <el-button style="" @click="handleListDel">
                  <el-icon>
                    <el-icon style="width: 21px;height: 21px"> <Delete/></el-icon>
                  </el-icon>
                </el-button>
              </div>
              <el-table :data="VersiondataList.comList"  border @selection-change="handleSelectionChange"
                        ref="multipleTableRef" style="width: 100%;">
                <el-table-column type="selection" width="55" />
                <el-table-column prop="username" label="章节">
                </el-table-column>
                <el-table-column prop="phone" label="描述" >
                </el-table-column>
                <el-table-column prop="email" label="进度"/>
                <el-table-column prop="role" label="负责人"  />
                <el-table-column prop="role" label="保存时间"  />
              </el-table>
              <el-pagination
                  background
                  style="margin-top: 15px"
                  :current-page="VersiondataForm.page"
                  :total="VersiondataForm.count"
                  layout="prev, pager, next"
                  :page-size="VersiondataForm.pagesize"
                  @size-change="sizeChange"
                  @current-change="currentChange"
              />
            </el-tab-pane>
            <el-tab-pane label="报告版本" name="third">
              <div class="buttons">
                <el-button style="" @click="handleAdd">
                  <el-icon style="width: 21px;height: 21px"> <Plus/></el-icon>
                </el-button>
                <el-button style="" @click="handleEdit">
                  <el-icon style="width: 21px;height: 21px"><Edit/></el-icon>
                </el-button>
                <el-button style="" @click="handleRowDel">
                  <el-icon>
                    <el-icon style="width: 21px;height: 21px"> <Delete/></el-icon>
                  </el-icon>
                </el-button>
              </div></el-tab-pane>
          </el-tabs>

          <el-dialog v-model="dialogFormVisible" :title="dialogType === 'add' ? '新增' : '编辑'" draggable>
            <el-form :model="dataForm" label-width="auto">
              <el-form-item label="姓名">
                <el-input v-model="dataForm.username" autocomplete="off" />
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="dataForm.email" autocomplete="off" />
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="dataForm.phone" autocomplete="off" />
              </el-form-item>
              <el-form-item label="角色">
                <el-input v-model="dataForm.role" autocomplete="off" />
              </el-form-item>
            </el-form>
            <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogConfirm">确认</el-button>
        </span>
            </template>
          </el-dialog>
      <el-dialog v-model="DeleteVisible" title='您确认是否删除该名成员' draggable>
        <span class="dialog-footer">
          <el-button type="primary" @click="DeleteConfirm">确认</el-button>
          <el-button type="warning" @click="DeleteVisible=!DeleteVisible">取消</el-button>
        </span>
      </el-dialog>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive, ref} from "vue";
import {AddMember, DeleMember, EditMember, MemberGet, ProjectGet} from "../../utilts/project.ts";
import {MemberData} from "../../type/project.ts";
import {useRoute} from "vue-router";
import {ArrowDown, Delete, Edit, Plus} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";
import {AddCloud, DelCloud, EditCloud} from "../../utilts/cloud.js";
import {CloudData} from "../../type/cloud";
import {GetVersionChapter} from "../../utilts/writing";
import {ChapterData} from "../../type/writing";
const activeName = ref('first')
const data=reactive(new MemberData())
const dataForm=reactive(new MemberData().ruleForm)
const Versiondata=reactive(new ChapterData())
const VersiondataForm=reactive(new ChapterData().ruleForm)
const multipleSelection = ref([]);//多选
const DeleteVisible=ref(false);
const dialogType = ref("add")
const SelectedId=ref(0)
const selectedData = ref({})
const dialogFormVisible=ref(false)
const props=defineProps({
      companyInfo:{
        type:Object
      }
    }
)
onMounted(()=>{
  const companyInfo=props.companyInfo
  console.log(companyInfo)
  const route = useRoute()
  selectedData.value =JSON.parse(<string>route.query.data)
  selectedData.value=selectedData.value[0]
  console.log(selectedData.value)
  MemberGet(1).then((res)=>{
    data.list=res.data.data
    console.log(data.list)
  })
  GetVersionChapter(1).then((res)=>{
    Versiondata.list=res.data.data
    console.log(Versiondata.list)
  })
})
const handleSelectionChange = (val) => {
  multipleSelection.value = [];
  val.forEach(item => {
    multipleSelection.value.push(item.id)
  });
}
//添加按钮
const handleAdd = (val) => {

  dialogType.value = "add"
  dialogFormVisible.value = true
}
//编辑按钮
const handleEdit = (id) => {
  dataForm.id=id
  console.log(id)
  dialogType.value = "edit"
  dialogFormVisible.value = true

}
const DeleteConfirm = () => {
  DeleMember(SelectedId.value).then((res)=>{
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
const dialogConfirm = () => {
  if (dialogType.value === 'add') {
    console.log(dataForm)
    AddMember(dataForm).then((res)=>{
      console.log(res)
      ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success',
      })
    })
  } else {
    EditMember(dataForm).then((res)=>{
      console.log(res)
      ElMessage({
        message: 'Congrats, this is a success message.',
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
const VersiondataList=reactive({
  comList:computed(()=>{
    return Versiondata.list.slice((Versiondata.ruleForm.page-1)*Versiondata.ruleForm.pagesize,Versiondata.ruleForm.page*Versiondata.ruleForm.pagesize)
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

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.head{
  float: left;
  margin-bottom: 10px;
  font-size: 18px;
}
.info{
  float: left;
  display: flex;
  flex-direction: column;
.comInfo{
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;}
.compStock{
  display: flex;
  flex-direction: row;
  margin: 5px 25px;
  .el-text{
    padding: 5px;
  }
}
}
.buttons{
  float: right;
  margin-bottom: 10px;
}
</style>