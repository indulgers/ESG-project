<template>
  <el-container >
    <el-header style="margin-top: 70px">
      <el-card style="width: 100%;margin-top: 15px;">
      <div class="head">公司筛选条件</div>
      <el-divider></el-divider>
      <el-form :model="dataForm"><el-row :gutter="20">
        <el-col :span="6">
        <el-form-item label="公司名称/股票代码" >
          <el-input v-model="dataForm.companyName"></el-input>
        </el-form-item></el-col>
        <el-col :span="4">
        <el-form-item label="行业" ><el-input placeholder="All" :suffix-icon="ArrowDown" v-model="dataForm.classification1"></el-input></el-form-item></el-col>
        <el-col :span="4">
        <el-form-item label="子行业">
          <el-input :suffix-icon="ArrowDown" placeholder="All" v-model="dataForm.classification2"></el-input></el-form-item></el-col>
        <el-col :span="3">
        <el-form-item>

          <el-input label="分组" placeholder="All" :suffix-icon="ArrowDown"></el-input></el-form-item></el-col>
        <el-col :span="3">
        <el-form-item label="年度">
          <el-input  :suffix-icon="Calendar"></el-input></el-form-item></el-col>
        <el-col :span="3">
        <el-input :suffix-icon="ArrowDown" placeholder="α=0,β=1"></el-input>

        </el-col></el-row>
       <el-form-item><el-button type="primary" style="float: left;margin-top: 5px" @click="SubmitSearch">查询</el-button></el-form-item> </el-form>
    </el-card></el-header>
    <el-container>
      <el-container>
        <el-main style="margin-top: 45px">
          <el-card style="margin-top: 25px">
          <el-button style="padding: 10px;display: flex;justify-self: left" @click="dialogFormVisible=!dialogFormVisible"> <el-image src="/src/assets/compare.png" style="margin: 5px"></el-image>对比</el-button>
          <el-table
              ref="multipleTableRef"
              :data="data.list"
              style="width: 100%;padding: 15px;"
              @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column label="证券代码" width="120" prop="stockCode">
              <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="companyName" label="公司名称" width="120" />
            <el-table-column prop="egpa" label="E-GPA" width="120" />
            <el-table-column prop="sgpa" label="S-GPA" width="120" />
            <el-table-column prop="ggpa" label="G-GPA" width="120" />
            <el-table-column prop="esgGpa" label="ESG
            GPA" width="120" />
            <el-table-column prop="esgDegree" label="ESG
Credit/Degree" width="120" />
            <el-table-column prop="desgiRank" label="DESGI rank
(X/100)" width="120" />
            <el-table-column label="操作">
              <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)"><el-icon><View/></el-icon>
                <el-text style="color: #535bf2" size="small">查看</el-text>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
            <el-dialog v-model="dialogFormVisible" title="某公司历史ESG表现" draggable>
              <v-chart class="chart" :option="option" />
            </el-dialog>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>


<script lang="ts" setup>
import {onMounted, reactive, ref, watch} from 'vue'
import { ElTable } from 'element-plus'
import {ArrowDown, Calendar, View} from "@element-plus/icons-vue";
import {CommentGet} from "../../utilts/comment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import {  provide } from "vue";
import {CommentData, CommentForm} from "../../type/comment.js";
const data=reactive(new CommentData())
const dataForm=reactive(new CommentData().ruleForm)
const dialogFormVisible = ref(false);//是否打开
const comData=ref(new CommentData().list)
onMounted(()=>{
  CommentGet(dataForm).then((res)=>{
    data.list=res.data.data
    comData.value=res.data.data
    console.log(data.list)
  })
})
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

provide(THEME_KEY, "dark");
function random() {
  return Math.round(300 + Math.random() * 700) / 10;
}
const option = ref({
  textStyle: {
    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
  },
  dataset: {
    dimensions: ["Product", "2015", "2016", "2017"],

    source: [
      {
        Product: "白磊有限公司",
        2015: random(),
        2016: random(),
        2017: random()
      },
      {
        Product: "张磊有限公司",
        2015: random(),
        2016: random(),
        2017: random()
      },
      {
        Product: "程芳有限公司",
        2015: random(),
        2016: random(),
        2017: random()
      },
      {
        Product: "Tp industry limited",
        2015: random(),
        2016: random(),
        2017: random()
      }
    ]
  },
  xAxis: { type: "category" },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  backgroundColor: "#fff",
});
const barOptions = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'bar'
  }]
})

const SubmitSearch=()=>{
  let arr: CommentForm[]=[];
  if(dataForm.companyName||dataForm.classification1||dataForm.classification2){
    if(dataForm.companyName){
      arr=data.list.filter((value)=>{
        return value.companyName.indexOf(dataForm.companyName)!==-1;
      })
    }
    else if(dataForm.classification1){
      arr=data.list.filter((value)=>{
        return value.classification1.indexOf(dataForm.classification1)!==-1;
      })
    }
    else if(dataForm.classification2){
      arr=data.list.filter((value)=>{
        return value.classification2.indexOf(dataForm.classification2)!==-1;
      })
    }
    else{
      arr=data.list
    }
  }
  console.log(arr)
  data.list=arr
  data.ruleForm.count=data.list.length
};
watch([()=>dataForm.companyName,()=>dataForm.classification1,()=>dataForm.classification2],()=>{
  if(dataForm.companyName==""&&dataForm.classification1==""&&dataForm.classification2==""){
    CommentGet(dataForm).then((res)=>{
      data.list=res.data.data
      data.ruleForm.count=res.data.data.length
    })
  }
})

</script>

<style lang="scss" scoped>
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
.chart {
  height: 400px;
  width: 100vh;
}
</style>