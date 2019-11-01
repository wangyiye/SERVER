import axios from './index';



export function customList(options) {
    let params = {
        lx: 'all',
        type: '',
        search: '',
        page: 1,
        limit: 7
    };
    params = Object.assign(params, options);
    return axios.get('/customer/list', {
        params
    })
}

export function deleteCustom(customerId) {
    return axios.get('/customer/delete', {
        params: {
            customerId
        }
    })
}
export function addCustom(options) {
    return axios.post('/customer/add', options)
}

export function updateCustom(options) {
    let obj={
        customerId: options.id,
        name: options.name,
        sex:options.sex == '男' ? 0 : 1,
        email:options.email,
        phone:options.phone,
        QQ:options.QQ,
        weixin:options.weixin,
        type:options.type,
        address:options.address
    }
    return axios.post('/customer/update', obj)
}