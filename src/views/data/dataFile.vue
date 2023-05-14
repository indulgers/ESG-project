<template>
<data-bread style="margin-top: 15px"></data-bread>
  <el-card style="margin: 25px">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane >
      <template #label>
        <span class="custom-tabs-label">
          <span >
          <el-icon style="border-radius: 50%;width: 25px;height: 25px"><Upload/> </el-icon></span>
          <span>环境</span>
        </span>
    </template>
      <el-card>
      <div class="file">
      <div class="fileText">
      <el-text tag="b" style="color: #484848">
        A1 排放
      </el-text>
      <el-text type="info" size="small">
        A1.2 温室气体排放量及其强度 <br>
        A1.3 产生的有害废物总量及其强度 <br>
        A1.4 产生的非危险废物总量及其强度 <br>
    </el-text></div>
      <div class="fileText">
        <el-text tag="b" style="color: #484848">
          A2 资源的使用
        </el-text>
        <el-text type="info" size="small">
          A2.1 直接/间接能源消耗及其强度 <br>
          A2.2 用水量及其强度 <br>
          A2.5 总包装材料 <br>
        </el-text>
      </div></div>
        <div style="display: flex;justify-content: center">
        <div class="DownUp">
          <div class="Down" >
            <div class="DownHeader">
            <el-text style="color: #1e296b;">Step1 &nbsp;<em/></el-text>
            <el-text style="color: #383838;">下载标准模板</el-text></div>
        <el-card style="  padding: 20px 20px 0 20px;border: 1px dashed #d9d9d9;border-radius: 6px;transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  cursor: pointer;width: 250px">
          <div style="display: flex;flex-direction: column;justify-content: center;align-items: center">
          <el-image src="/src/assets/excel.png" style="width:27px;height: 33px" @click="upload"></el-image>
          <el-text style="color: #333333;">ENVIRONMENTAL DATA SHEET</el-text>
          <el-text style="color: #a8a8a8;"> Excel 标准模板</el-text></div>
        </el-card>
        </div>
          <div class="Up">
            <div class="UpHeader">
              <el-text style="color: #1e296b;">Step2 &nbsp;</el-text>
              <el-text style="color: #383838;">上传数据文件</el-text>
            </div>
      <el-upload
          class="upload-demo"
          drag
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
          style="width: 300px"
      >
        <el-image src="/src/assets/drag.png" style="width: 17px;height: 23px"></el-image>
        <div class="el-upload__text">
          点击或 <em>将文件拖拽到这里上传</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload></div></div>
        </div></el-card>
    </el-tab-pane>
    <el-tab-pane label="Config" name="second"><template #label>
        <span class="custom-tabs-label">
          <el-icon style="
border-radius: 50%;width: 25px;height: 25px"><Upload/></el-icon>
          <span>社会</span>
        </span>
    </template>

      <el-card>
        <div class="file">
          <div class="fileText">
            <el-text tag="b" style="color: #484848">
              A1 排放
            </el-text>
            <el-text type="info" size="small">
              A1.2 温室气体排放量及其强度 <br>
              A1.3 产生的有害废物总量及其强度 <br>
              A1.4 产生的非危险废物总量及其强度 <br>
            </el-text></div>
          <div class="fileText">
            <el-text tag="b" style="color: #484848">
              A2 资源的使用
            </el-text>
            <el-text type="info" size="small">
              A2.1 直接/间接能源消耗及其强度 <br>
              A2.2 用水量及其强度 <br>
              A2.5 总包装材料 <br>
            </el-text>
          </div></div>
        <div style="display: flex;justify-content: center">
          <div class="DownUp">
            <div class="Down" >
              <div class="DownHeader">
                <el-text style="color: #1e296b;">Step1 &nbsp;<em/></el-text>
                <el-text style="color: #383838;">下载标准模板</el-text></div>
              <el-card style="  padding: 20px 20px 0 20px;border: 1px dashed #d9d9d9;border-radius: 6px;transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  cursor: pointer;width: 250px">
                <div style="display: flex;flex-direction: column;justify-content: center;align-items: center">
                  <el-image src="/src/assets/excel.png" style="width:27px;height: 33px" @click="upload"></el-image>
                  <el-text style="color: #333333;">ENVIRONMENTAL DATA SHEET</el-text>
                  <el-text style="color: #a8a8a8;"> Excel 标准模板</el-text></div>
              </el-card>
            </div>
            <div class="Up">
              <div class="UpHeader">
                <el-text style="color: #1e296b;">Step2 &nbsp;</el-text>
                <el-text style="color: #383838;">上传数据文件</el-text>
              </div>
              <el-upload
                  class="upload-demo"
                  drag
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  multiple
                  style="width: 300px"
              >
                <el-image src="/src/assets/drag.png" style="width: 17px;height: 23px"></el-image>
                <div class="el-upload__text">
                  点击或 <em>将文件拖拽到这里上传</em>
                </div>
                <template #tip>
                  <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                  </div>
                </template>
              </el-upload></div></div>
        </div></el-card></el-tab-pane>
    <el-tab-pane label="Role" name="third"><template #label>
        <span class="custom-tabs-label">
          <el-icon style="
border-radius: 50%;width: 25px;height: 25px"><Upload /></el-icon>
          <span>管理</span>
        </span>
    </template>
      <el-card>
        <div class="file">
          <div class="fileText">
            <el-text tag="b" style="color: #484848">
              A1 排放
            </el-text>
            <el-text type="info" size="small">
              A1.2 温室气体排放量及其强度 <br>
              A1.3 产生的有害废物总量及其强度 <br>
              A1.4 产生的非危险废物总量及其强度 <br>
            </el-text></div>
          <div class="fileText">
            <el-text tag="b" style="color: #484848">
              A2 资源的使用
            </el-text>
            <el-text type="info" size="small">
              A2.1 直接/间接能源消耗及其强度 <br>
              A2.2 用水量及其强度 <br>
              A2.5 总包装材料 <br>
            </el-text>
          </div></div>
        <div style="display: flex;justify-content: center">
          <div class="DownUp">
            <div class="Down" >
              <div class="DownHeader">
                <el-text style="color: #1e296b;">Step1 &nbsp;<em/></el-text>
                <el-text style="color: #383838;">下载标准模板</el-text></div>
              <el-card style="  padding: 20px 20px 0 20px;border: 1px dashed #d9d9d9;border-radius: 6px;transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  cursor: pointer;width: 250px">
                <div style="display: flex;flex-direction: column;justify-content: center;align-items: center">
                  <el-image src="/src/assets/excel.png" style="width:27px;height: 33px" @click="upload"></el-image>
                  <el-text style="color: #333333;">ENVIRONMENTAL DATA SHEET</el-text>
                  <el-text style="color: #a8a8a8;"> Excel 标准模板</el-text></div>
              </el-card>
            </div>
            <div class="Up">
              <div class="UpHeader">
                <el-text style="color: #1e296b;">Step2 &nbsp;</el-text>
                <el-text style="color: #383838;">上传数据文件</el-text>
              </div>
              <el-upload
                  class="upload-demo"
                  drag
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  multiple
                  style="width: 300px"
              >
                <el-image src="/src/assets/drag.png" style="width: 17px;height: 23px"></el-image>
                <div class="el-upload__text">
                  点击或 <em>将文件拖拽到这里上传</em>
                </div>
                <template #tip>
                  <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                  </div>
                </template>
              </el-upload></div></div>
        </div></el-card></el-tab-pane>
    </el-tabs>

  </el-card>
</template>

<script setup>
import {Calendar, Plus, Upload} from "@element-plus/icons-vue";
import { ref, watch } from 'vue'
import {ElMessage} from "element-plus";
import DataBread from "../../components/dataBread.vue";
import {BlockDownload} from "../../utilts/block.ts";
//数据
const queryInput = ref("")
let tableData = ref([
  {
    id: 1,
    name: 'Tom1',
    email: "123@qq.com",
    phone: "12345678901",
    state: '在职',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 20,
    name: 'Tom2',
    email: "123@qq.com",
    phone: "12345678901",
    state: '在职',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    name: 'Tom3',
    email: "123@qq.com",
    phone: "12345678901",
    state: '在职',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
  },

])
let tableDataCopy = tableData.value;
const multipleSelection = ref([]);//多选
const dialogFormVisible = ref(false);//是否打开
const formLabelWidth = "80px";//弹出框 标题长度
const tableForm = ref({})
const dialogType = ref("add")
//监控数据
watch(queryInput, (val) => {
  if (val.length > 0) {
    tableData.value = tableData.value.filter(item => item.name.toLowerCase().match(val.toLowerCase()));
  } else {
    tableData.value = tableDataCopy;
  }
})
function upload(){
  BlockDownload().then((res)=>{
    var blob=new Blob([res.data],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
    var downloadElement=document.createElement('a')
    var href=window.URL.createObjectURL(blob)
    downloadElement.href=href
    downloadElement.download='数据模板.xlsx'
    downloadElement.click()
    document.body.removeChild(downloadElement)
    window.URL.revokeObjectURL(href)
  })
}
//选择事件
const handleSelectionChange = (val) => {
  multipleSelection.value = [];
  val.forEach(item => {
    multipleSelection.value.push(item.id)
  });
}
//添加按钮
const handleAdd = (val) => {
  tableForm.value = {}
  dialogType.value = "add"
  dialogFormVisible.value = true
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
//编辑按钮
const handleEdit = (val) => {
  tableForm.value = val
  dialogType.value = "edit"
  dialogFormVisible.value = true
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}

//删除一条按钮
const handleRowDel = (id) => {
  console.log(id)
  let index = tableData.value.findIndex(item => item.id === id)
  tableData.value.splice(index, 1)
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
    type: 'warning',
  })
}

//确认按钮
const dialogConfirm = () => {
  if (dialogType.value === 'add') {
    tableData.value.push({
      id: tableData.value.length + 1,
      ...tableForm.value
    })
  } else {
    let index = tableData.value.findIndex(item => item.id === tableForm.id);
    tableData[index] = tableForm
  }
  dialogFormVisible.value = false
}



</script>

<style lang="scss" scoped>
.DownUp{
  display: flex;
  flex-direction: row;
  background-color: #efeff3;
  justify-content: center;
  width: 90%;
  .Down{
    display: flex;
    flex-direction: column;
    margin:20px 45px 30px 15px;
    .DownHeader{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 5px;
    }
  }
  .Up{
    display: flex;
    flex-direction: column;
    margin:20px 15px 30px 45px;
    .UpHeader{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 5px;
    }
  }
}
.file{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .fileText{
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 5px;
    .el-text{
      margin: 3px;
      align-self: flex-start;
    }
  }
}

.head{
  float: left;
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