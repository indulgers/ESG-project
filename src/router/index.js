import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import {useTokenStore} from "../store/token.ts";
const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path:'/login',
            name:'login',
            component:()=>import('../views/login&register/login.vue'),
        },
        {
            path:'/loginform',
            name:"loginform",
            component:()=>import('../views/login&register/LoginForm.vue'),

        },
        {
            path:'/registerform',
            name:'registerform',
            component:()=>import('../views/login&register/RegisterForm.vue')
        },
        {
            path:'/index',
            name:'index',
            component:()=>import('../views/Index.vue'),
            meta:{
                requireAuth:true
            },
            children:[
                {
                    path:'chain',
                    name:'chain',
                    component:()=>import('../views/chain.vue'),
                    meta:{
                        requireAuth:true
                    }
                },

                {
                    path: 'block',
                    name: 'block',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: ()=>import('../views/block/block.vue'),
                    meta:{
                        requireAuth:true
                    }
                },
                {
                    path:'profit',
                    name:'profit',
                    component:()=>import('../views/block/profit.vue'),
                    meta:{
                        requireAuth:true
                    }
                },
                {
                    path:'adapter',
                    name:'adapter',
                    meta:{
                        title:'EIS适应器',
                        requireAuth:true
                    },
                    children:[
                        {
                            path:'cloud',
                            name:'cloud',
                            component:()=>import('../views/data/cloud.vue'),
                            meta:{
                                title: '云服务',
                                requireAuth:true
                            }
                        },
                        {
                            path:'dataFile',
                            name:'dataFile',
                            component:()=>import('../views/data/dataFile.vue'),
                            meta:{
                                title: '数据文件',
                                requireAuth:true
                            }
                        },
                        {
                            path:'fillTable',
                            name:'fillTable',
                            component:()=>import('../views/data/fillTable.vue'),
                            meta:{
                                title: '表格填写',
                                requireAuth:true
                            }
                        },
                    ]
                },
                {
                    path:'data',
                    name:'data',
                    component:()=>import('../views/data/data.vue'),
                    meta:{
                        requireAuth:true
                    }
                },

                {
                    path:'program',
                    name:'program',
                    component:()=>import('../views/program/program.vue'),
                    meta:{
                        requireAuth:true
                    }

                },
                {
                    path:'writeList',
                    name:'writeList',
                    meta:{
                        title:'ESG写作列表'
                    },
                    children:[
                        {
                        path:'viewDetail',
                        name:'viewDetail',
                        component:()=>import('../views/program/viewDetail.vue'),
                        meta:{
                            title: '查看ESG项目',
                            requireAuth:true
                        }
                    }
                    ]
                },

                {
                    path:'writeManage',
                    name:'writeManage',
                    meta:{
                      title: 'ESG写作管理',
                        requireAuth:true
                    },
                    children:[  {
                        path:'writeView',
                        name:'writeView',
                        component:()=>import('../views/writing/writingOverview.vue'),
                        meta:{
                            title:'ESG写作概览',
                            requireAuth:true
                        }},
                        {
                            path:'writeOver',
                            name:'writeOver',
                            meta:{
                                title:'ESG写作概览',
                                requireAuth:true
                            },
                            children:[
                                {
                                    path:'writeEdit',
                                    name:'writeEdit',
                                    component:()=>import('../views/writing/writingEdit.vue'),
                                    meta:{
                                        title:'ESG写作编辑',
                                        requireAuth:true
                                    }
                                },
                            ]
                    },
                    ]
                },
                {
                    path:'writing',
                    name:'writing',
                    component:()=>import('../views/writing/writing.vue'),
                    meta:{
                        title: 'ESG写作管理',
                        requireAuth:true
                    }
                },

                {
                    path:'comment',
                    name:'comment',
                    component:()=>import('../views/comment/comment.vue'),
                    meta:{
                        requireAuth:true
                    }
                }
            ]
        },
        {
            path:'/error',
            redirect:'/login'
        }
    ]
})
router.beforeEach((to, from, next)=>{
    const store=useTokenStore()
    if (to.meta.requireAuth) {//requireAuth若为true则sec该路由需要判断是否登录
        if (localStorage.TokenInfo) {//判断当前的userName数据是否存在
            next();
        }
        else {
            next({//返回登录页面
                path: '/error',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }


})
export default router
