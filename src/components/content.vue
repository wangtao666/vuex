<template>
  <div id="content">
    <router-link to="/" :class="c_back">< <span :class="el_save" @click="el_saves">保存</span></router-link>
    <textarea :class="text_1" v-model="title1">{{title1}}</textarea>
    <textarea :class="text_2" v-model="value1">{{value1}}</textarea>
  </div>
</template>
<script>
  export default {
    data (){
      return{
        c_back:{
          c_back : true
        },
        text_1:{
          text_1:true
        },
        text_2:{
          text_2:true
        },
        el_save:{
          el_save:true
        },
        title1:'',
        value1:''
      }
    },
    methods:{
      el_saves:function () {
        var id = sessionStorage.getItem('id');
        var label = this.title1;
        var content = this.value1;
        this.$http.get('http://192.168.79.12:8888/todo_change?id='+id+'&label='+label+'&content='+content).then(response =>{
          alert(response.body)
        },response =>{
          alert('连接失败！')
        })
      }
    },
    mounted(){
      var label = sessionStorage.getItem('label');
      var content = sessionStorage.getItem('content');
      this.title1 = label;
      this.value1 = content;
    }
  }
</script>
<style>
  #content{overflow-x: hidden}
  .c_back{
    display: block;
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: left;
    padding-left: 2rem;
    font-size: 2rem;
    text-decoration: none;
    color: #ffffff;
    background: #3eaab4;
    position: relative;
  }
  .text_1{
    width: 100%;
    height:4rem;
    line-height: 4rem;
    background: #ffffff;
    font-size: 1.35rem;
    text-align: center;
    resize: none;
  }
  .text_2{
    width: 100%;
    height: 75rem;
    resize: none;
    padding: 30px 0 0 50px;
    box-sizing: border-box;
    resize: none;
  }
  .el_save{
    display: inline-block;
    width: 6rem;
    height: 100%;
    text-align: center;
    background: red;
    position: absolute;
    right: 2rem;
    top: 0;
  }
</style>
