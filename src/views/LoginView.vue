<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6">
        <h2>有棵橙智慧经营平台后台管理系统</h2>
    </el-col>
    <el-col :span="6">
        <el-divider direction="vertical"></el-divider>
    </el-col>
    <el-col :span="6">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"  @keyup.enter.native="submitForm('loginForm')"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password"  @keyup.enter.native="submitForm('loginForm')"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="loginForm.code"  @keyup.enter.native="submitForm('loginForm')"></el-input>
          <el-image :src="captchaImage" @click="getCaptcha"></el-image>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button style="color: black !important;" @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>





</template>
import { Message } from 'element-ui';
<script>

import router from "@/router";
import store from "@/store";
import {mapMutations, mapState} from 'vuex';
import qs from "qs";

export default {
  name: "LoginView",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'change' },
          { min: 5, max: 5, message: '长度为5个字符', trigger: 'blur' }
        ]
      },
      captchaImage: null,




    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/api/login',this.loginForm).then(res =>{
            //拿到jwt
            //const jwt = res.headers['authorization']
            const jwt = res.data.data;
            console.log(jwt)
            //放入本地token
            this.$store.commit('SET_TOKEN',jwt)

            this.$router.replace("/data")


          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //获取验证码
    getCaptcha() {
      this.$axios.get('/captcha').then(res =>{
        console.log("/captcha")
        console.log(res.data.data.captchaImage)
        this.loginForm.token = res.data.data.token
        this.captchaImage = res.data.data.captchaImage
        this.loginForm.code = ''
      })
    },
  },
  created() {
    this.getCaptcha()
  }
}
</script>

<style  scoped>
.el-row{
    height: 100%;
    display: flex;
    background-color: #fafafa;
    align-items: center;
  text-align: center;
}

.el-divider{
    height: 200px;
}
</style>
