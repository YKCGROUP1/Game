import axios from '@/axios'
export function test1(params) {
    return axios({
        url:'/dailyDataApi/all/getGoodImage',
        method:'get',
        params:params
    })
}