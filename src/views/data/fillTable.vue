<template>
  <data-bread style="margin-top: 15px"></data-bread>
  <el-card style="margin: 25px">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane >
        <template #label>
        <span class="custom-tabs-label">
          <span >
          <el-icon style="
border-radius: 50%;width: 25px;height: 25px"><Upload/> </el-icon></span>
          <span>环境</span>
        </span>
        </template>
        <el-divider></el-divider>
        <el-form
            ref="ruleFormRef"
            :model="dataForm"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
            label-position="top"
        >
          <div style="display: flex;flex-direction: row">
          <el-form-item prop="date1" label="请明确指出数据的年月">
            <el-date-picker
                v-model="dataForm.collectionTime"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
            />
          </el-form-item >
            <el-form-item label="公司ID" style="margin-left: 30px">
              <el-input v-model="dataForm.companyId" ></el-input>
            </el-form-item>
          <el-button style="margin: 30px 30px  0px 30px;justify-self: flex-end;position: absolute;right: 120px" @click="Submit" type="primary">提交</el-button></div>
          <el-divider></el-divider>
          <el-form-item label="请在下方填写管理相关信息">
          </el-form-item>
          <el-row>
          <el-col :span="8">
            <el-form-item label="SOX" prop="region">
              <el-input-number
                  v-model="dataForm.sox"
                  :min="0"
                  :max="10"
                  controls-position="right"
                  size="large"
                  :step="0.1"
              />
          </el-form-item></el-col>
          <el-col :span="8">
            <el-form-item label="NOX" prop="region">
              <el-input-number
                  v-model="dataForm.nox"
                  :min="0"
                  :max="10"
                  controls-position="right"
                  size="large"
                  :step="0.1"
              />
          </el-form-item></el-col>
          <el-col :span="8">
            <el-form-item label="PMX" prop="region">
              <el-input-number
                  v-model="dataForm.pmx"
                  :min="0"
                  :max="10"
                  controls-position="right"
                  size="large"
                  :step="0.1"
              />
            </el-form-item>
          </el-col>
        </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="A1.2温室气体(GHG)排放量" prop="region">
                <el-input-number
                    v-model="dataForm.ghgIntensity"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A1.3有害废弃物" prop="region">
                <el-input-number
                    v-model="dataForm.hazardousWaste"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A1.4无害废弃物" prop="region">
                <el-input-number
                    v-model="dataForm.nonHazardousWaste"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="A2.1电能消耗" prop="region">
                <el-input-number
                    v-model="dataForm.powerConsumption"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A2.2水消耗" prop="region">
                <el-input-number
                    v-model="dataForm.waterConsumption"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A2.5包装材料总量" prop="region">
                <el-input-number
                    v-model="dataForm.totalPackagingMaterial"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Config" name="second"><template #label>
        <span class="custom-tabs-label">
          <el-icon style="
border-radius: 50%;width: 25px;height: 25px"><Upload/></el-icon>
          <span>社会</span>
        </span>
      </template>
        <el-divider></el-divider>
        <el-form
            ref="ruleFormRef"
            :model="dataForm"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
            label-position="top"
        >
          <div style="display: flex;flex-direction: row">
            <el-form-item prop="date1" label="请明确指出数据的年月">
              <el-date-picker
                  v-model="dataForm.collectionTime"
                  type="date"
                  placeholder="Pick a date"
                  style="width: 100%"
              />
            </el-form-item >
            <el-form-item label="公司ID" style="margin-left: 30px">
              <el-input v-model="dataForm.companyId" ></el-input>
            </el-form-item>
            <el-button style="margin: 30px 30px  0px 30px;justify-self: flex-end;position: absolute;right: 120px" @click="Submit" type="primary">提交</el-button></div>
          <el-divider></el-divider>
          <el-form-item label="请在下方填写管理相关信息">
          </el-form-item>
          <el-row>
            <el-col :span="8">
              <el-form-item label="SOX" prop="region">
                <el-input-number
                    v-model="dataForm.sox"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="NOX" prop="region">
                <el-input-number
                    v-model="dataForm.nox"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="PMX" prop="region">
                <el-input-number
                    v-model="dataForm.pmx"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="A1.2温室气体(GHG)排放量" prop="region">
                <el-input-number
                    v-model="dataForm.ghgIntensity"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A1.3有害废弃物" prop="region">
                <el-input-number
                    v-model="dataForm.hazardousWaste"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A1.4无害废弃物" prop="region">
                <el-input-number
                    v-model="dataForm.nonHazardousWaste"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="A2.1电能消耗" prop="region">
                <el-input-number
                    v-model="dataForm.powerConsumption"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A2.2水消耗" prop="region">
                <el-input-number
                    v-model="dataForm.waterConsumption"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A2.5包装材料总量" prop="region">
                <el-input-number
                    v-model="dataForm.totalPackagingMaterial"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Role" name="third"><template #label>
        <span class="custom-tabs-label">
          <el-icon style="
border-radius: 50%;width: 25px;height: 25px"><Upload /></el-icon>
          <span>管理</span>
        </span>
      </template>
        <el-divider></el-divider>
        <el-form
            ref="ruleFormRef"
            :model="dataForm"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
            label-position="top"
        >
          <div style="display: flex;flex-direction: row">
            <el-form-item prop="date1" label="请明确指出数据的年月">
              <el-date-picker
                  v-model="dataForm.collectionTime"
                  type="date"
                  placeholder="Pick a date"
                  style="width: 100%"
              />
            </el-form-item >
            <el-form-item label="公司ID" style="margin-left: 30px">
              <el-input v-model="dataForm.companyId" ></el-input>
            </el-form-item>
            <el-button style="margin: 30px 30px  0px 30px;justify-self: flex-end;position: absolute;right: 120px" @click="Submit" type="primary">提交</el-button></div>
          <el-divider></el-divider>
          <el-form-item label="请在下方填写管理相关信息">
          </el-form-item>
          <el-row>
            <el-col :span="8">
              <el-form-item label="SOX" prop="region">
                <el-input-number
                    v-model="dataForm.sox"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="NOX" prop="region">
                <el-input-number
                    v-model="dataForm.nox"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="PMX" prop="region">
                <el-input-number
                    v-model="dataForm.pmx"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="A1.2温室气体(GHG)排放量" prop="region">
                <el-input-number
                    v-model="dataForm.ghgIntensity"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A1.3有害废弃物" prop="region">
                <el-input-number
                    v-model="dataForm.hazardousWaste"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A1.4无害废弃物" prop="region">
                <el-input-number
                    v-model="dataForm.nonHazardousWaste"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="A2.1电能消耗" prop="region">
                <el-input-number
                    v-model="dataForm.powerConsumption"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A2.2水消耗" prop="region">
                <el-input-number
                    v-model="dataForm.waterConsumption"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="A2.5包装材料总量" prop="region">
                <el-input-number
                    v-model="dataForm.totalPackagingMaterial"
                    :min="0"
                    :max="10"
                    controls-position="right"
                    size="large"
                    :step="0.1"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-tab-pane>
    </el-tabs>

  </el-card>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import {BlockAdd, ModifyBlock} from "../../utilts/block";
import {BlockData} from "../../type/block";
import {FileData} from "../../type/cloud";
import {FormSubmit} from "../../utilts/cloud";
import {ElMessage} from "element-plus";
const data=reactive(new FileData())
const dataForm=reactive(new FileData().ruleForm)
const Submit = () => {
    FormSubmit(dataForm).then((res)=>{
      console.log(dataForm)
      console.log(res)
      ElMessage({
        message:'您已提交成功',
        type:'success'
      })
    })
  }

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({

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
.demo-ruleForm{
 margin: 30px;
  color: #1a1a1a;
}
</style>