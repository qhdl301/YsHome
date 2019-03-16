<template>
    <div class="w3-container">
      <hr>
          <div class="w3-cell-row" v-if="locYn">현재 위도: {{latitude}} 경도: {{longitude}}</div>
          <div class="w3-cell-row" v-else>이 브라우저에서는 Geolocation이 지원되지 않습니다.</div>
          <hr>
          <div id="map" style="width:500px;height:400px;z-index:0;"></div>
      <hr>
    </div>
</template>
<script>
     export default {
       data() { 
        return {
          locYn : false,
          latitude : 0,
          longitude : 0,
          daumMap : '',
        } 
      },
      mounted() {
        var errorMsg = '사용자로 부터 위치 정보를 불러올 수 없습니다.';
         if(navigator.geolocation){
            var _this = this;  
            _this.$data.locYn = true 
              var getLocationCallback = function(pos) {
            // _this를 사용하는 이유는 해당 function안에 this는 getCurrentPosition의 this로 잡힘
            _this.$data.latitude = pos.coords.latitude     // 위도, 
            _this.$data.longitude = pos.coords.longitude   // 경도
            //이녀석은 비동기라서, init이 먼저 실행된다.
            //따라서 5번을 지우고 비동기행위가 끝나고 callback이 실행되는 순간에 init을 해야한다.
            
            //좌표가 불러져 왔으므로 다음맵 생성
            _this.initDaumMap() // //따라서 비동기행위가 끝나고 callback이 실행되는 순간에 init을 해야한다.(pos <- 비동기행위 후 CallBack 함수)
            } 
          var getLocationErrorCallback = function(error){
            console.log(error)
            alert(errorMsg);
          }
          navigator.geolocation.getCurrentPosition (getLocationCallback, getLocationErrorCallback);
         }else{
            alert(errorMsg);
        }
      },

      methods:{
        initDaumMap(){
          var _this = this;  
          var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
          var options = { //지도를 생성할 때 필요한 기본 옵션
            //center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            center: new daum.maps.LatLng(_this.$data.latitude,_this.$data.longitude), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
          };

          this.$data.daumMap = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
        }
      },
      props:[
        "mode",
      ]
  }
</script> 