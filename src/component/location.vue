<template>
    <div class="w3-container">
      <hr>
          <div class="w3-cell-row" v-if="locYn">현재 위치 : {{myAddr}}</div>
          <div class="w3-cell-row" v-else>이 브라우저에서는 Geolocation이 지원되지 않습니다.</div>
          <div class="w3-cell-row" v-if="miseResult">현재 미세먼지 상태는 : {{miseResult}}</div>
          <hr>
          <div id="map" style="width:500px;height:400px;z-index:0;"></div>
      <hr>
    </div>
</template>
<script>
  import axios from 'axios'
     export default {
       data() {        
        return {
          locYn : false,
          latitude : 0,
          longitude : 0,
          myAddr : '',          
          miseResult : ''
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
            _this.getMiseData()
            } 
          var getLocationErrorCallback = function(error){
            console.log(error)
            alert(errorMsg);
          }
          navigator.geolocation.getCurrentPosition(getLocationCallback, getLocationErrorCallback);
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
          _this.callAddress()
        },

        callAddress(){
          var _this = this;  
          var geocoder = new daum.maps.services.Geocoder();
          var coord = new daum.maps.LatLng(_this.$data.latitude, _this.$data.longitude);

          var callback = function(result, status) {
            if (status === daum.maps.services.Status.OK) {
              _this.$data.myAddr = result[0].address.address_name;
            }
          };
          geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
          
        },

        getMiseData(){
          var _this = this;
          //var miseAddrKey = 'HhZIHZVKtYvTeXRVfIYhfVLZPGlvVjWEhKHKk4X%2F%2Fol0SCriRxuZMdE3TwDiuJAS7IUVqgb4GSz7qN%2BIOtjPCg%3D%3D';
          //var reqUrl = "http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX="+_this.$data.latitude+"&tmY="+_this.$data.longitude+"&pageNo=1&numOfRows=10&ServiceKey="+miseAddrKey;
          //json 타입이 string이면 
          var reqUrl = "https://my-json-server.typicode.com/qhdl301/YsAxios/dust?"
            axios.get(reqUrl).then(function(result){ // _this를 안붙이면 ->  blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
            if(typeof(result) == "string"){
              JSON.stringify(result)
            }
            //console.log(typeof(result));             // 붙이면 콘솔에 -> Cannot read property 'get' of undefined
            _this.$data.miseResult = result.data.microDust;                                             
          })
        }

      },
      props:[
        "mode",
      ]
  }
</script> 