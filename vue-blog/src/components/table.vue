<template>
  <div>
    <form>
      <div class="search-name">
        <input type="text">
      </div>
      <div class="search-btn">
        <button>查询</button>
      </div>
      <div class="search-add-btn">
        <button>新增</button>
      </div>
    </form>
    <table>
      <thead>
        <tr>
          <th><div class="check"><input type="checkbox"></div></th>
          <th><div class="num"><span>#</span></div></th>
          <th><div class="name">姓名<span class="icon"><i class="fa fa-sort-asc" aria-hidden="true"></i><i class="fa fa-sort-desc" aria-hidden="true"></i></span></div></th>
          <th><div class="sex">性别<span class="icon"><i class="fa fa-sort-asc" aria-hidden="true"></i><i class="fa fa-sort-desc" aria-hidden="true"></i></span></div></th>
          <!-- <th><div class="year">年龄<span class="icon"><i class="fa fa-sort-asc" aria-hidden="true"></i><i class="fa fa-sort-desc" aria-hidden="true"></i></span></div></th> -->
          <th><div class="day">生日<span class="icon"><i class="fa fa-sort-asc" aria-hidden="true"></i><i class="fa fa-sort-desc" aria-hidden="true"></i></span></div></th>
          <th><div class="address">地址<span class="icon"><i class="fa fa-sort-asc" aria-hidden="true"></i><i class="fa fa-sort-desc" aria-hidden="true"></i></span></div></th>
          <th><div class="operating">操作</div></th>
        </tr>
      </thead>
    </table>
    <ul class="table-list">
      <li v-for="item in tableList">
        <span><input type="checkbox"></span>
        <span>{{ item.num }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.sex}}</span>
        <span>{{ item.day}}</span>
        <span>{{ item.address }}</span>
        <span>
          <button class="edit">编辑</button>
          <button class="del">删除</button>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        tableList:[
          {
            num:'1',
            name:'one',
            sex:'boy',
            day:'1993/04/13',
            address:'湖南省 岳阳市'
          },
          {
            num:'2',
            name:'one',
            sex:'boy',
            day:'1993/04/13',
            address:'湖南省 岳阳市'
          },
          {
            num:'3',
            name:'one',
            sex:'boy',
            day:'1993/04/13',
            address:'湖南省 岳阳市'
          },
          {
            num:'4',
            name:'one',
            sex:'boy',
            day:'1993/04/13',
            address:'湖南省 岳阳市'
          },
          {
            num:'5',
            name:'one',
            sex:'boy',
            day:'1993/04/13',
            address:'湖南省 岳阳市'
          },
          {
            num:'6',
            name:'one',
            sex:'boy',
            day:'1993/04/13',
            address:'湖南省 岳阳市'
          },
          {
            num:'7',
            name:'one',
            sex:'boy',
            day:'1993/04/13',
            address:'湖南省 岳阳市'
          },
          {
            num:'8',
            name:'one',
            sex:'boy',
            day:'1993/04/13',
            address:'湖南省 岳阳市'
          },
          {
            num:'9',
            name:'one',
            sex:'boy',
            day:'1993/04/13',
            address:'湖南省 岳阳市'
          },
          {
            num:'10',
            name:'one',
            sex:'boy',
            day:'1993/04/13',
            address:'湖南省 岳阳市'
          }
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  form{
    width: 100%;
    height: 60px;
    background: #f1f1f1;
  }
  .search-name{
    width: 300px;
    height: 60px;
    float: left;
    input{
      display: block;
      width: 280px;
      box-sizing: border-box;
      height: 40px;
      border-radius: 5px;
      border: none;
      padding-left: 10px;
      outline: none;
      margin: 10px 10px;
    }
  }
  .search-btn, .search-add-btn{
    width: 100px;
    height: 40px;
    float: left;
    margin:10px;
    button{
      width: 100%;
      height: 100%;
      border-radius: 5px;
      box-sizing: border-box;
      border: none;
      background: #333;
      color: #fff;
      cursor: pointer;
      outline: none;
    }
  }
  table{
    width: 100%;
    height: 50px;
    margin-top: 1px;
    padding: 0;
    tr{
      width: 100%;
      height: 50px;
      background: #f1f1f1;
      .fa-sort-asc{
        position: relative;
        left:9px;
        cursor: pointer;
      }
    }
  }
  .table-list{
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #f1f1f1;
    height: 510px;
    box-sizing: border-box;
    li{
      border-bottom: 1px solid #f1f1f1;
      height: 50px;
      width: 100%;
      li:nth-of-type(10){
        border: none;
      }
    }
    li:hover{
      background: #edf7ff;
    }
    span{
      display: block;
      position: relative;
      height: 50px;
      line-height: 50px;
      width: 179px;
      margin-left: 2px;
      margin-bottom: 1px;
      text-align: center;
      float: left;
    }
  }
  .table-list span:nth-of-type(1){
    width: 69px;
  }
  .table-list span:nth-of-type(2){
    width: 39px;
  }
  .table-list span:nth-of-type(7){
    width: 114px;
    button{
      width: 40px;
      height: 25px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }
  }
  .del{
    background: red;
    color: #fff;
  }
  .edit{
    background: #333;
    color: #fff;
  }


</style>
