<template>
  <div id="todo">
    <div :class="todo_title">
      <ul>
        <li v-bind:class="classObject" @click="daiban">待办</li>
        <li v-bind:class="classObject2" @click="yiban">已办</li>
        <li v-bind:class="classObject3" @click="add">新加</li>
      </ul>
    </div>
    <div :class="todo_content">
      <ul v-show="yes">
        <li v-for="(item,index) in titles" :key="index">
          <input type="checkbox" ref="el_checkbox">
          <div :class="el_content" @click="choose(item)">
            <span>{{index+1}}.</span>
            <span>{{item.label}}</span>
          </div>
        </li>
      </ul>
      <ul v-show="no">
        <li v-for="(item,index) in titles2" :key="index">
          <input type="checkbox">
          <span>{{index+7}}.</span>
          <span>{{item.title}}</span>
        </li>
      </ul>
      <div v-show="adds" :class="el_add">
        <textarea :class="text_1" v-model="title1" placeholder="标题"></textarea>
        <textarea :class="text_2" v-model="value1" placeholder="正文"></textarea>
        <div :class="sure" @click="sure_go" v-show="surer">{{ sures }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        el_checkbox:'',
        sure:{
          sure:true
        },
        todo_content:{
          todo_content:true
        },
        sures:'确定',
        surer:false,
        todo_title:{
          todo_title:true
        },
        el_content:{
          el_content:true
        },
        classObject:{
          active:true,
          text_danger: true
        },
        classObject2:{
          active:false,
        },
        classObject3:{
          active:false,
        },
        yes:true,
        no:false,
        adds:false,
        el_add:{
          el_add:true
        },
        text_1:{
          text_1:true
        },
        text_2:{
          text_2:true
        },
        titles : [],
        titles2 : [{
          title : '标题标题'
        },{
          title : '标题标题'
        },{
          title : '标题标题'
        },{
          title : '标题标题'
        },{
          title : '标题标题'
        },{
          title : '标题标题'
        }],
        title1:'',
        value1:''
      }
    },
    methods:{
      daiban:function () {
        this.classObject.active = true;
        this.classObject2.active = false;
        this.classObject3.active = false;
        this.no = false;
        this.yes = true;
        this.adds = false;
        this.surer = false;
        this.$http.get('http://192.168.79.12:8888/todo_search_all').then(response => {
          this.titles = response.body
        },response => {
          alert('连接失败！');
        })
      },
      yiban:function () {
        this.classObject.active = false;
        this.classObject2.active = true;
        this.classObject3.active = false;
        this.no = true;
        this.yes = false;
        this.adds = false;
        this.surer = false;
      },
      add:function () {
        this.classObject.active = false;
        this.classObject2.active = false;
        this.classObject3.active = true;
        this.no = false;
        this.yes = false;
        this.adds = true;
        this.surer = true;
      },
      sure_go:function () {
        var titles2 = {'title':this.title1};
        var values2 = this.value1;
        this.titles.push(titles2);
        this.$http.get('http://192.168.79.12:8888/todo_add?label='+this.title1+'&content='+values2).then(response => {
          document.getElementsByClassName('text_danger')[0].click()
        },response => {
          alert('连接失败！')
        })
      },
      choose:function (obj) {
        var id = obj._id;
        var label = obj.label;
        var content = obj.content;
        sessionStorage.setItem('id',id);
        sessionStorage.setItem('label',label);
        sessionStorage.setItem('content',content);
        location.href = '#/todo/content'
      }
    },
    mounted(){
      this.$http.get('http://192.168.79.12:8888/todo_search_all').then(response => {
        this.titles = response.body
      },response => {
        alert('连接失败！');
      })
      console.log(this.$refs.el_checkbox)
    }
  }
</script>
<style>
  @import "../../static/css/todo.css";
</style>
