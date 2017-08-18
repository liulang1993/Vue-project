<template>
  <div>
    <div class="formNav">
      <ul class="form-list">
        <h2>Project Menu</h2>
        <li><router-link :to="{path:'table'}">Table</router-link></li>
        <li><router-link :to="{path:'froms'}">Form</router-link></li>
        <li><router-link :to="{path:'list'}">List</router-link></li>
      </ul>
      <div class="form-content">
        <keep-alive>
          <router-view>
          </router-view>
        </keep-alive>
      </div>
    </div>
  </div>


</template>
<script>

  export default{
    data(){
      return{
        menu:[
          {
            name:"Table",
            path:'table'
          },
           {
            name:"Froms",
            path:'froms'
          },
           {
            name:"List",
            path:'list'
          }
        ]
      }
    }
  }
</script>
<style scope lang="less">
  .formNav{
    width: 80%;
    height: 600px;
    margin: 0 auto;
  }
  .form-list{
    float: left;
    width: 15%;
    height: 160px;
    background: #fff;
    list-style: none;
    margin: 0;
    padding: 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
    li{
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      cursor: pointer;
      a{
        text-decoration: none;
        display: block;
      }
    }
    li:hover{
      background: #333;
      color: #fff;
    }
    li:hover a{
      color: #fff;
    }
    li:nth-of-type(3){
      border-bottom: none;
    }
   h2{
      background: #333;
      color: #fff;
      margin: 0;
      padding: 0;
      height: 40px;
      font-size: 18px;
      line-height: 40px;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
  }
  .form-content{
    float: left;
    width: 84%;
    margin-left: 1%;
    background: #fff;
    height: 600px;
  }
  .router-link-active{
    background: #333;
    color: #fff;
  }
</style>
