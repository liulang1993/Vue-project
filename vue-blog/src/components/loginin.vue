<template>
  <div>
    <div class="login-wrap">
      <div class="login-input">
        <h2>登录</h2>
        <input v-model="usernameModel" class="login-username" type="text" placeholder="请输入邮箱账号"></br>
        <span class="error">{{ userError.errorText }}</span>
        <input v-model="passwordModel" class="login-password" type="text" placeholder="请输入密码"></br>
        <span class="error">{{ passError.errorText }}</span>
        <button @click="loginBtn">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        usernameModel:'',
        passwordModel:''
      }
    },
    computed:{
      userError(){
        let errorText
        let status
        if (this.usernameModel == '') {
          status = true
          errorText = ''
        }
        else if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.usernameModel))) {
          status = false
          errorText = '请使用11位有效数字的电话号码'
        }
        else{
          status = true
          errorText = ''
        }
        return{
          status,
          errorText
        }
      },
      passError(){
        let errorText
        let status
        if (this.passwordModel == '') {
          status = true
          errorText = ''
        }
        else if (!/^\w{8,16}$/g.test(this.passwordModel)) {
          status = false
          errorText = '密码长度应为8-16位'
        }
        else{
          status = true
          errorText = ''
        }
        return{
          status,
          errorText
        }
      }
    },
    methods:{
      loginBtn(){
        console.log(this.usernameModel,this.passwordModel)
      }
    }
  }
</script>
<style scope lang="less">
  .login-wrap{
    width: 80%;
    margin: 0 auto;
    position: relative;
  }
  .login-input{
    width: 45%;
    height: 270px;
    background: #fff;
    border-radius: 5px;
    margin: 0 auto;
    padding: 50px 0;
    h2{
      width: 60px;
      height: 60px;
      color: #fff;
      background-color: #3b3b3b;
      font-size: 20px;
      border-radius: 50%;
      margin: 0 auto;
      text-align: center;
      line-height: 60px;
      margin-bottom: 50px;
    }
    button{
      width: 60%;
      height: 30px;
      background:#252525;
      margin: 0 auto;
      border: none;
      border-radius: 5px;
      color: #fff;
      outline: none;
      cursor:pointer;
      display: block;
      margin-top: 20px;
    }
    span{
      display: none;
      width: 60%;
      padding-left: 10px;
      box-sizing: border-box;
      font-size: 12px;
      color: red;
      margin: -20px auto 10px auto;
    }
    .error{
      display: block;
      color: red;
    }
  }
  .login-username, .login-password{
    width: 60%;
    height: 30px;
    outline: none;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 auto;
    display: block;
    box-sizing: border-box;
  }
</style>
