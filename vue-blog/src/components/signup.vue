<template>
  <div>
    <div class="sign-wrap">
      <div class="sign-input">
        <h2>注册</h2>
        <input v-model="signuserModel" class="sign-username" type="text" placeholder="请输入账号"></br>
        <span class="error">{{ userError.errorText }}</span>
        <input v-model="signpassModel" class="sign-password" type="password" placeholder="请输入密码"></br>
        <span class="error">{{ passError.errorText }}</span>
        <input v-model="signcomfirmModel" class="sign-comfirm-password" type="password" placeholder="请确认密码"></br>
        <span class="error">{{ comfirmError.errorText }}</span>
        <button>注册</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        signuserModel:'',
        signpassModel:'',
        signcomfirmModel:''
      }
    },
    computed:{
      userError(){
        let status
        let errorText
        if (this.signuserModel == '') {
          status = true
          errorText = ''
        }
        else if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.signuserModel))) {
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
        let status
        let errorText
        if (this.signpassModel == '') {
          status = true
          errorText = ''
        }else if (!/^\w{8,16}$/g.test(this.signpassModel)) {
          status = false
          errorText = '密码长度应为8-16位'
        }else{
          status = true
          errorText = ''
        }
        return{
          status,
          errorText
        }
      },
      comfirmError(){
        let status
        let errorText
        if (this.signcomfirmModel == '') {
          status = true
          errorText = ''
        }
        else if (this.signcomfirmModel != this.signpassModel) {
          status = false
          errorText = '两次密码输入不一致'
        }
        return {
          status,
          errorText
        }
      }
    }
  }
</script>
<style scope lang="less">
  .sign-wrap{
    width: 80%;
    margin: 0 auto;
    position: relative;
  }
  .sign-input{
    width: 45%;
    height: 340px;
    background: #fff;
    border-radius: 5px;
    margin: 0 auto;
    padding: 50px 0;
    h2{
      width: 60px;
      height: 60px;
      color: #fff;
      font-size: 20px;
      background-color: #3b3b3b;
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
      // display: none;
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
  .sign-username, .sign-password, .sign-comfirm-password{
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
