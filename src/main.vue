<template>  <!-- 템플릿은 script에서 가공된 데이터를 html태그에 표현해주는 방식  -->
  <div>
        <nav v-if="isMenu" class="w3-sidebar w3-bar-block w3-card">
        <div class="w3-container w3-theme-d2">
        <span v-on:click="menuClose" class="w3-button w3-display-topright w3-large">닫기</span>
        <br>
        
        
        <div class="w3-padding w3-center">
            <img class="w3-circle" src="./assets/img/ys.jpg" alt="avatar" style="width:75%">
        </div>
        </div>
            <!-- 숨겨져있는 네비게이션 리스트영역 -->
            <a class="w3-bar-item w3-button" href="javascript:;" v-on:click="modeChg('홈페이지')">홈</a> <!-- 하이퍼링크 태그에  javascript:; 사용하면 하이퍼링크 무시-->
            <a class="w3-bar-item w3-button" href="javascript:;" v-on:click="modeChg('프로필')">프로필</a>
            <a class="w3-bar-item w3-button" href="javascript:;" v-on:click="modeChg('가족')">가족들</a>
        </nav>

        <!-- 헤더에 표시되는 이름 및 헤더영역 -->
        <header class="w3-bar w3-card w3-theme">
            <!-- 네비게이션바를 나오게 하는 버튼 -->
        <button v-on:click="menuOpen" class="w3-bar-item w3-button w3-xxxlarge w3-hover-theme">&#9776;</button>
        <h1 class="w3-bar-item">Kim0Soo - Movies</h1>
        </header>


        <!-- 이걸 페이지 단위로 자르자 - 홈페이지 -->
        <homepage v-if="mode=='홈페이지'"></homepage>
                
                

        <!-- 이걸 페이지 단위로 자르자 - 프로필  -->
        <profile v-if="mode=='프로필'"></profile>


        <!-- 이걸 페이지 단위로 자르자 - 가족들  -->
        <family v-if="mode=='가족'"></family>

        <footer class="w3-container w3-theme w3-margin-top">
        <h3>0Soo Mobile Front Web Profile Pages</h3>
        <h3>이곳은 푸터입니다.</h3>
        </footer>

  </div>
</template>
<script> 
// 실질적으로 동작 로직은 script 부분에서 처리
// 개발할때는 npm run start
// 빌드할때는 npm run build
import homepage from "./component/homepage.vue"
import profile from "./component/profile.vue"
import family from "./component/family.vue"
  export default {
       data() { 
        return {
          isMenu : false,
          mode : '홈페이지'
        }
      },
      methods:{
        menuOpen : function(){
            this.$data.isMenu = true
        },
        menuClose : function(){
            this.$data.isMenu = false
        },
        modeChg : function(mode){
            this.$data.mode = mode;
            this.menuClose();
        }

      },
      components : {

        "homepage" : homepage,
        "profile" : profile,
        "family" : family,

      }
  }
</script>