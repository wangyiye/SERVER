import axios from './index';



export function login(account, password) {
    return axios.post('/user/login', {
        account,
        password
    })
}

export function power() {
    return axios.get('/user/power')
}

export function test() {
    return axios.get('/user/login')
}

export function exit() {
    return axios.get('/user/signout')
}
export function userInfo(userId=null) {
    return axios.get('/user/info',{
        params:{
            userId
        }
    })
}
export function edit(option) {
    let params={password:option}
    if(typeof option =='number'){
        params={userId:option}
    }
    return axios.post('/user/resetpassword',params)
}