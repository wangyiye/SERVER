import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router';

/* 导入公共样式 */
import './assets/reset.min.css';
import './assets/font/iconfont.css';

/* 导入UI库中所有的组件和对应的样式 */
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";


// import {quanxian,jiance,userXinxi} from "./api/login.js";
import {power,test,userInfo} from "./api/login.js";
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.directive('power', {
  inserted: function (el,binding) {
    if(store.state.power.includes(binding.value)){
      return;
    }
    // 聚焦元素
    el.parentNode.removeChild(el);
  }
})


//=>检测是否登录：只有保证是登录状态，才让其继续渲染组件等
test().then(result => {
  if (result.code == 0) {
    //把登录态存储到vuex中
    store.commit('changeLogin', true);
    return power();
  }
  return Promise.reject();
}).catch(reason => {
  Vue.prototype.$alert('只有登录的用户才能访问系统，请您先登录！', '系统提示', {
    callback: action => {
      location.href = location.origin + '/login.html';
    }
  });
}).then(result => {
  if (result.code == 0) {
    //把登录态存储到vuex中
    //=>已经获取到权限信息了，把权限信息存储到vuex
    store.dispatch('addPower',result.power);
    //=>渲染组件：此时vuex中一定有权限和登录状态信息
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
    return userInfo();
  }
}).then(result=>{
  if (result.code == 0) {
    store.dispatch('addXinxi',result.data);
  }
});