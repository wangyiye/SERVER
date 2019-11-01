import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
// import {quanxian} from '../api/login';
import {
	customList
} from '../api/custom';
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {

	},
	state: {
		isLoad: false,
		power: '',
		userXinxi: {},
		myCustomList: null,
		allCustomList:null,
		customInfo:null
	},
	mutations: {
		changeLogin(state, isLogin = true) {
			state.isLogin = isLogin;
		},
		addPower(state, power) {
			state.power = power;
		},
		addXinxi(state, data) {
			state.userXinxi = data;
		},
		changeCustomList(state, payload) {
			let {
				lx = 'my',
					result = {}
			} = payload;
			lx === 'my' ? state.myCustomList = result : state.allCustomList = result;
		},
		changeCustomInfo(state,payload){
			let customInfo={...payload};
			customInfo.sex=payload.sex==0?'男':'女';
			state.customInfo=customInfo
		}
	},
	actions: {
		addPower(context, power) {
			context.commit('addPower', power)
		},
		addXinxi(context, data) {
			context.commit('addXinxi', data)
		},
		changeCustomList(context, lx = 'my') {
			customList({
				lx
			}).then(result => {
				if(result.code==0){
				context.commit('changeCustomList', {
					result,
					lx
				});
				return
			}
			return Promise.reject(result.codeText)
			}).catch(() => {});
		},
		changeCustomInfo(context,payload){
			context.commit('changeCustomInfo', payload)
		}
	},
	plugins: [logger()]
});