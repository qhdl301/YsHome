<template>  <!-- 템플릿은 script에서 가공된 데이터를 html태그에 표현해주는 방식  -->
  <div>
      <button v-on:click="metho1">클릭1</button>
      <button v-on:click="metho2">클릭2</button>
      <button v-on:click="metho3">클릭3</button>
      <ul>
          <todovue v-bind:mode="type"></todovue>
          <todovue1 v-bind:mode="type"></todovue1>
          <todovue2 v-bind:mode="type"></todovue2>
      </ul>
  </div>
</template>
<script> 
// 실질적으로 동작 로직은 script 부분에서 처리
// 개발할때는 npm run start
// 빌드할때는 npm run build
import todovue from "./component/todo.vue"
import todovue1 from "./component/todo1.vue"
import todovue2 from "./component/todo2.vue"
  export default {
       data() { 
        return {
          message: '안녕하세요 Vue!',
          ok : '알았어',
          flag : false,
          type : ''
        }
      },
      methods:{
        metho1:function(){
          this.$data.type = 'type'
        },
        metho2:function(){
          this.$data.type = 'type1'
        },
        metho3:function(){
          this.$data.type = 'type2'
        }
      },
      components : {

        "todovue" : todovue,
        "todovue1" : todovue1,
        "todovue2" : todovue2,

      }
  }
</script>