/* 
 *  配置路由表：设置什么样的地址（或者HASH）渲染哪一个组件的规则
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index';
import Home from './pages/Home';
import UserList from './pages/user/UserList';
import UserAdd from './pages/user/UserAdd';
import JobList from './pages/Job/JobList';
import JobAdd from './pages/Job/JobAdd';
import DepList from './pages/dep/DepList';
import DepAdd from './pages/dep/DepAdd';
import Custom from './pages/Custom';
import CustomList from './pages/custom/CustomList';
import CustomHandle from './pages/custom/CustomHandle';
import CustomVisit from './pages/custom/CustomVisit';
Vue.use(VueRouter);
let router= new VueRouter({
    //设置路由模式:hash/history
    mode: 'hash',
    //配置一级路由
    routes: [{
        path: '/',
        redirect:'/custom'
    }, {
        // HASH路径
        path: '/home',
        //命名路由
        name:'home',
        //渲染的组件
        component: Home,
        redirect:'/home/userList',
        //=>系统设置的权限校验
		beforeEnter(to, from, next) {
			let power = store.state.power;
			if (/(userhandle|departhandle|jobhandle)/.test(power)) {
				next();
				return;
			}
			Vue.prototype.$alert('您无权限访问此页面，请联系系统管理员！', '系统提示');
		},
        children:[{
            path:'/home/userList',
            component:UserList
        },
        {
            path:'/home/jobList',
            component:JobList
        },
        {
            path:'/home/depList',
            component:DepList
        },
        {
            path:'/home/userAdd',
            component:UserAdd
        },
        {
            path:'/home/jobAdd',
            component:JobAdd
        },
        {
            path:'/home/depAdd',
            component:DepAdd
        }]
    }, {
        path: '/custom',
        name:'custom',
        component: Custom,
        redirect:'/custom/list',
        //配置某一个一级路由下面的二级路由
        children:[{
            path:'/custom/list',
            name:'customList',
            component:CustomList
        },{
            //简写
            path:'handle',
            name:'customHandle',
            component:CustomHandle
        },{
           
            path:'visit',
            name:'CustomVisit',
            component:CustomVisit
        }]

    }]
})

/* 全局守卫  */
export default router;