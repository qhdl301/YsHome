<template>
    <div class="w3-container">
        <h2>지역별 미세먼지 농도</h2>
        <p>서울/경기/인천</p>
        <ul class="w3-ul w3-card-4">
            <li class="w3-bar" v-for="(item,idx) in areaDustInfo" v-bind:key="idx">
            <div class="w3-bar-item">
                <span class="w3-large">{{item.city}}</span><br>
                <span>미세먼지 : {{item.microDust}} / 최대미세먼지 : {{item.maxDust}} </span>
            </div>
            </li>
        </ul>
        </div>
</template>
<script>
    import axios from 'axios'
     export default {
       data() { 
        return {
            areaDustInfo : []
        } 
      },
       mounted() {
           this.getMiseData()
       },
      methods:{
        getMiseData(){
          var _this = this;
          var reqUrl = "https://my-json-server.typicode.com/qhdl301/YsAxios/areaDustInfo"
            axios.get(reqUrl).then(function(result){ 
                _this.$data.areaDustInfo = result.data
          })
        }   
      },
      props:[
          "mode",
      ]
  }
</script> 