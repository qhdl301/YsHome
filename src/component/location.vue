<template>
    <div class="w3-container">
      <hr>
          <div class="w3-cell-row" v-if="locYn">현재 위치는 : + {{latitude}} + , + {{longitude}} +</div>
          <div class="w3-cell-row" v-else>이 브라우저에서는 Geolocation이 지원되지 않습니다.</div>
      <hr>
    </div>
</template>
<script>
     export default {
       data() { 
        return {
          locYn : false,
          latitude : 0,
          longitude : 0
        } 
      },
      created() {
          if(navigator.geolocation){
            this.$data.locYn = true 
            var _this = this;  
             navigator.geolocation.getCurrentPosition (function(pos) {
                // _this를 사용하는 이유는 해당 function안에 this는 getCurrentPosition의 this로 잡힘
                _this.$data.latitude = pos.coords.latitude     // 위도, 
                _this.$data.longitude = pos.coords.longitude   // 경도
             });
          }
      },
      methods:{
        
      },
      props:[
        "mode",
      ],
      
  }
</script> 