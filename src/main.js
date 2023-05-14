import { createApp } from 'vue'
import './style/index.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createPinia}   from "pinia";
import "echarts"
import I18n from "./lang/i18n.js";
import ECharts from "vue-echarts";
import Vue from "vue-chart/dist/vue-chart.js";
const  pinia=createPinia()
const app=createApp(App)
app.use(ElementPlus).use(pinia).component('v-chart',ECharts).use(router).use(I18n)
app.config.productionTip = false;
app.mount('#app')