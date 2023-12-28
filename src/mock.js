const Mock = require('mockjs')

const Random = Mock.Random

let Result = {
    code: 200,
    msg: '操作成功',
    data: null
}
Mock.mock('/captcha','get',()=> {

    Result.data = {
        token: Random.string(32),
        captchaImage : Random.dataImage('120x40','p7n5w')
    }

    return Result
})

Mock.mock('/login','post',()=> {
    // Result.code = 400
    // Result.msg = "验证码错误"
    return Result
})

Mock.mock('/sys/userInfo','get',()=>{
    Result.data = {
        id : '1',
        username: '葛凇文',
        department: '超级管理员',
        quanxian1: 'true'
    }
    return Result
})

Mock.mock('/logout','post',()=>{
    return Result
})

Mock.mock("/api/nav",'get',()=>{
    let nav = [
        {
            name: 'DataPart',
            title: 'YKCBI',
            component: '',
            path: '',
            children: [
                {
                    name: 'DataShow',
                    title: '数据看板',
                    component: 'DataView',
                    path: '/data',
                    children: []
                },
                {
                    name: 'DataUpdate',
                    title: '更新数据',
                    component: 'TestView',
                    path: '/test',
                    children: []
                },
            ]
        },
        {
            name: 'ProductPart',
            title: '产品数据',
            component: '',
            path: '',
            children: [
                {
                    name: 'ProductShow',
                    title: '产品对照',
                    component: 'ProductView',
                    path: '/product',
                    children: []
                }
            ]
        },
    ]
    let authoritys = []
    Result.data = {
        nav:nav,
        authoritys: authoritys
    }
    return Result
})