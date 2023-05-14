<template>
  <el-container style="margin-top: 10px">
    <el-header><el-card style="width: 100%;padding:0 15px 15px 15px;margin: 30px 0">
      <div class="head">联盟链管理 ></div>
    </el-card></el-header>
    <el-container style="margin: 15px">
      <el-aside style="width: 200px;background-color: #1e296b;color: #ffffff;height: 100vh" >
        <div class="related">
          <el-text style="color: #eeeeee;">利益相关者</el-text>
          <el-dropdown trigger="click" style="margin-left:80px">
       <el-image src="/src/assets/menu.png" style="width: 12px;height: 14px;"></el-image>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Setting" @click="handleManage"> 管理原链</el-dropdown-item>
                <el-dropdown-item :icon="Plus" @click="handleAdd">加入原链</el-dropdown-item>
                <el-dropdown-item :icon="Right" @click="">离开原链</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

        </div>
        <el-dialog v-model="dialogFormVisible" :title="dialogType === 'edit' ? '修改原链' : '加入新链'" draggable>
          <el-form :model="dataForm" label-width="auto">
            <el-form-item label="公司名称">
              <el-input v-model="dataForm.companyName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="公司ID" v-show="dialogType==='edit'">
              <el-input v-model="dataForm.id" autocomplete="off" />
            </el-form-item>
            <el-form-item label="公司股票代码">
              <el-input v-model="dataForm.stockCode" autocomplete="off" />
            </el-form-item>
            <el-form-item label="公司所属行业">
              <el-input v-model="dataForm.classification" autocomplete="off" />
            </el-form-item>
            <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogConfirm">确认</el-button>
          <el-button type="warning" @click="dialogFormVisible=!dialogFormVisible">取消</el-button>
        </span>
            </template>
          </el-form>
          <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogConfirm">确认</el-button>
          <el-button type="warning" @click="dialogFormVisible=!dialogFormVisible">取消</el-button>
        </span>
          </template>
        </el-dialog>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
            background-color="#1e296b"
            text-color="#fffff"
            v-for="item in data.list" :key="item.id"
        >
          <el-menu-item index="1" style="display: flex;flex-direction: row;margin: 0">
              <div style="display: flex;flex-direction: column"><el-icon style="margin: 0"><Avatar/></el-icon>
                <el-dropdown trigger="click" style="margin: 0 0 0 5px">
                  <el-image src="/src/assets/ThreePoint.png" style="width: 12px;height: 14px;"></el-image>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item :icon="Setting" @click=""> 管理现有情况</el-dropdown-item>
                      <el-dropdown-item :icon="Edit" @click="handleEdit">修改原有信息</el-dropdown-item>
                      <el-dropdown-item :icon="CirclePlusFilled" @click="">添加新成员</el-dropdown-item>
                      <el-dropdown-item :icon="Right">离开该公司</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
                </div>
            <span style="margin:0 0 10px 5px">{{ item.companyName }}</span>

          </el-menu-item>


        </el-menu></el-aside>
      <el-container>
        <el-main><el-card>
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane  name="first">
              <template #label>
              <el-icon><Coin></Coin></el-icon>
              <span>区块链上的数据</span>
              </template>
              <div class="profitLayout">
                <div class="select">
              <el-select
                  v-model="value3"
                  multiple
                  collapse-tags
                  collapse-tags-tooltip
                  placeholder="请选择"
                  style="margin: 10px"
              >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select></div>
              <el-upload
                  class="upload-demo"
                  drag
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  multiple
              >
                <div class="el-upload__text">
                  将表头拖拽到或 <em>点击这里进行分组</em>
                </div>
                <template #tip>
                  <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                  </div>
                </template>
              </el-upload>
                <div class="event">
              <el-checkbox-group v-model="checkList">
              <el-checkbox label="Word" />
              <el-checkbox label="PDF" />
              <el-checkbox label="CSV" />
              <el-checkbox label="JSON" />
              </el-checkbox-group>
              <el-button type="primary">导出数据</el-button></div>
              </div>
              </el-tab-pane>

            <el-tab-pane  name="second">
              <template #label>
                <el-icon><Document /></el-icon>
              <span>区块链上的文件</span>
            </template>
              <el-table :data="Filedata.comList"  border @selection-change="handleSelectionChange"
                        ref="multipleTableRef" style="width: 100%;">
                <el-table-column type="selection"  />
                <el-table-column prop="id" label="序号" >
                </el-table-column>
                <el-table-column prop="filename" label="文件名称" >
                </el-table-column>
                <el-table-column prop="url" label="链接地址"  />
                <el-table-column prop="uploaderid" label="上传者ID"  />
              </el-table>
              <el-pagination
                  background
                  :current-page="dataForm.page"
                  :total="dataForm.count"
                  layout="prev, pager, next"
                  :page-size="dataForm.pagesize"
                  @size-change="sizeChange"
                  @current-change="currentChange"
              />
            </el-tab-pane>
          </el-tabs>
        </el-card></el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script  setup>
import {
  Avatar,
  Calendar,
  CirclePlusFilled,
  Coin,
  Document,
  Edit,
  Plus,
  Right,
  Setting,
  UploadFilled
} from "@element-plus/icons-vue";
import {onMounted, provide, reactive, ref} from "vue";
import {BlockAdd, BlockDownload, GetFile, GetProfit, ModifyBlock} from "../../utilts/block.ts";
import {BlockData} from "../../type/block.ts";
import {computed} from "vue";
import {ElMessage} from "element-plus";
import {FileData} from "../../type/cloud.ts";
const dialogType = ref("manage")
const dialogFormVisible = ref(false);//是否打开
const data=reactive(new BlockData())
const showId=ref(false)
const dataForm=reactive(new BlockData().ruleForm)
const Filedata=reactive(new FileData())
const FileForm=reactive(new FileData().ruleForm)
onMounted(()=>{
  GetProfit().then((res)=>{
    data.list=res.data.data
    console.log(data.list)
  })
  GetFile().then((res)=>{
    Filedata.comList=res.data.data
    console.log(Filedata.comList)
  })
})
const dialogConfirm = () => {
  if (dialogType.value === 'edit') {
    ModifyBlock(dataForm).then((res)=>{
      console.log(res)
      ElMessage({
        message: '修改成功',
        type: 'success'
      })
    })
  } else if(dialogType.value==='add'){
    console.log(dataForm)
    BlockAdd(dataForm).then((res)=>{
      console.log(res)
      ElMessage({
        message: '添加成功',
        type: 'success'
      })
    })
  }

  dialogFormVisible.value = false
  Object.assign({}, new BlockData().ruleForm)
}

const handleAdd = (val) => {
  dataForm.value = {}
  dialogType.value = 'add'
  showId.value=false
  console.log(dialogType.value)
  dialogFormVisible.value = true
}
const handleEdit = (id) => {
  dataForm.id=id
  console.log(id)
  dialogType.value = "edit"
  dialogFormVisible.value = true
}
const handleManage = (val) => {
  dataForm.value = {}
  dialogType.value = 'manage'
  console.log(dialogType.value)
  dialogFormVisible.value = true

}
const checkList = ref(['Word','PDF','CSV','JSON'])
const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const value4 = ref([])
const options = [
  {
    value: 'ESG报告数据',
    label: 'ESG报告数据',
  },

]
const upload=()=>{
  BlockDownload().then((res)=>{
    const blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'});
    const downloadElement = document.createElement('a');
    const href = window.URL.createObjectURL(blob);
    downloadElement.href=href
    downloadElement.download='数据模板.xlsx'
    downloadElement.click()
    document.body.removeChild(downloadElement)
    window.URL.revokeObjectURL(href)
    ElMessage({
      message:'下载成功',
      type:'success'
    })
  })
}
const dataList=reactive({
  comList:computed(()=>{
    return Filedata.list.slice((Filedata.ruleForm.page-1)*Filedata.ruleForm.pagesize,Filedata.ruleForm.page*Filedata.ruleForm.pagesize)
  })
})

</script>

<style lang="scss" scoped>
.related{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  line-height: 30px;
  height: 30px;
}
.head{
  float: left;
}
.profitLayout{
  display: flex;
  flex-direction: column;
  .select{
    display: flex;
    justify-content: flex-end;
    width: 200px;
  }
  .event{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
