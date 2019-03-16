<template>
    <div class="w3-container">
      <hr>
          <div class="w3-cell-row" v-if="locYn">현재 위치는 : + {{latitude}} + , + {{longitude}};</div>
          <div class="w3-cell-row" v-else>이 브라우저에서는 Geolocation이 지원되지 않습니다.</div>
      <hr>
    </div>
</template>
<script>
     export default {
       data() { 
        return {
         
        } 
      },
      methods:{
 
      },
      props:[
          "mode",
          "latitude",
          "longitude",
          "locYn"
      ]
  }
</script> 