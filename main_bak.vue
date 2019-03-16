<template>  <!-- 템플릿은 script에서 가공된 데이터를 html태그에 표현해주는 방식  -->
  <div>
    <h2>This is 0Soo Vue main files !!!!!!!!! {{message}}</h2>
    <div></div>
    <div v-if="flag">{{ok}}</div>
    <button v-on:click="metho1">버튼</button>
    <ul>
      <li v-for="(tood, idx) in list" v-bind:key="idx">
        {{tood.text}}, {{idx}} 
      </li>
    </ul>
    <div>{{message}}</div>
    <input v-model="message">
    <div>현재 list 에 있는 갯수는 {{list.length}}</div>
    <todovue v-bind:text="ok" v-bind:flag="flag" v-bind:mode="'type'"></todovue>
    <ul>
      <todovue v-for="(tood, idx) in list" v-bind:key="idx" v-bind:text="tood.text" v-bind:count="idx"></todovue> 
      <!-- 1. 컴퓨티드,와치 알아내기 -->
      <!-- 2. NotePad++, 오늘 소스 내용 외우기 -->
    </ul>  
  </div>
</template>
<script> 
// 실질적으로 동작 로직은 script 부분에서 처리
// 개발할때는 npm run start
// 빌드할때는 npm run build
import todovue from "./component/todo.vue"
  export default {
       data() { 
        return {
          message: '안녕하세요 Vue!',
          ok : '알았어',
          flag : false,
          list : [
            {
              text : "자바스크립트 배우기",
            },
            {
              text : "Vue.js 배우기",
            },
            {
              text : "인터파크 합격하기",
            },
            {
              text : "기사 합격하기"
            }
          ]
        }
      },
      methods:{
        metho1:function(){
          this.$data.flag = !this.$data.flag
        },
        metho2:function(){
          
        }
      },
      components : {

        "todovue" : todovue 

      }
  }
</script>