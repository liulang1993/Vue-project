<template>
  <div>
    <div class="app-header">
      <div class="header-main">
        <div class="logo">LEARNER</div>
        <ul class="nav">
          <li><router-link :to="{path:'index'}">HOME</router-link></li>
          <li><router-link :to="{path:'project'}">PROJECT</router-link></li>
          <li><router-link :to="{path:'todo'}">ABOUT</router-link></li>
          <li><router-link :to="{path:'todolist'}">BLOG</router-link></li>
          <li><router-link :to="{path:'newslist'}">CONTACT</router-link></li>
        </ul>
        <div class="login">
          <button class="login-in" @click="loginClick">LOGIN IN</button>
          <button class="sign-up">SIGN UP</button>
        </div>
      </div>
    </div>
    <div class="app-container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">Copyright © 优站精选 | 京ICP备11008151号</div>
    <!-- <dialogs :is-show="isShowDialog">
      <p>other word</p>

    </dialogs> -->
  </div>
</template>

<script>

// import dialogs from './components/dialog'
export default {
  // components:{
  //   dialogs
  // },
  data(){
    return{
      isShowDialog:false
    }
  },
  methods:{
    loginClick(){
      this.isShowDialog = true
    }
  }
}
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .app-header{
    width: 100%;
    height: 100px;
    color: #fff;
    background: #252525;
  }
  .header-main{
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
  .logo{
    width: 15%;
    height: 100%;
    line-height: 100px;
    text-align: center;
    font-size: 35px;
    float: left;
  }
  .nav{
    width: 50%;
    height: 100%;
    line-height: 100px;
    margin-left: 10%;
    float: left;
    list-style: none;
    display: inline-block;
    transition:0.6s;
    li{
      text-align: center;
      line-height: 100px;
      a{
        display: block;
        float: left;
        width: 16%;
        padding: 0 2%;
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        &:hover{
          background-color: #ff5454;
        }
      }
    }
  }
  .login{
    width: 20%;
    height: 100%;
    float: right;
    button{
      width: 45%;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 5px;
      margin-left: 5%;
      margin-top: 30px;
      font-size: 14px;
      outline: none;
      color: #fff;
      display: inline-block;
      background: #252525;
      float: left;
      &:hover{
        background: #ff5454;
      }
    }
  }
  .app-container{
    width: 100%;
    padding-top: 5%;
    background:#f5f7fa;
    padding-bottom: 5%;
  }
  .app-footer{
    width: 100%;
    height: 100px;
    background: #252525;
    line-height: 100px;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
</style>
