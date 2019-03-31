<!-- 상태관리(뷰) -->
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
            <!-- 
            <a class="w3-bar-item w3-button" href="javascript:;" v-on:click="modeChg('홈페이지')">홈</a> 
            <a class="w3-bar-item w3-button" href="javascript:;" v-on:click="modeChg('프로필')">프로필</a>
            <a class="w3-bar-item w3-button" href="javascript:;" v-on:click="modeChg('가족')">가족정보</a>
            <a class="w3-bar-item w3-button" href="javascript:;" v-on:click="modeChg('위치')">위치정보</a>
            <a class="w3-bar-item w3-button" href="javascript:;" v-on:click="modeChg('영역')">영역</a>
            <a class="w3-bar-item w3-button" href="javascript:;" v-on:click="modeChg('표')">표</a> -->
            <router-link class="w3-bar-item w3-button" to="/">홈</router-link>
            <router-link class="w3-bar-item w3-button" to="/profile">프로필</router-link>
            <router-link class="w3-bar-item w3-button" to="/family">가족정보</router-link>
            <router-link class="w3-bar-item w3-button" to="/location">위치정보</router-link>
            <router-link class="w3-bar-item w3-button" to="/areaDustInfo">영역</router-link>
            <router-link class="w3-bar-item w3-button" to="/grid">표</router-link>
            <router-link class="w3-bar-item w3-button" to="/viewSample">뷰 샘플</router-link>
        </nav>

        <!-- 헤더에 표시되는 이름 및 헤더영역 -->
        <header class="w3-bar w3-card w3-theme">
            <!-- 네비게이션바를 나오게 하는 버튼 -->
        <button v-on:click="menuOpen" class="w3-bar-item w3-button w3-xxxlarge w3-hover-theme">&#9776;</button>
        <h1 class="w3-bar-item">Kim0Soo - {{title}}</h1>
        </header>
        <!-- 이걸 페이지 단위로 자르자 - 홈페이지 -->
        <!-- <homepage v-if="mode=='홈페이지'"></homepage> -->
        <!-- 이걸 페이지 단위로 자르자 - 프로필  -->
        <!-- <profile v-if="mode=='프로필'"></profile> -->
        <!-- 이걸 페이지 단위로 자르자 - 가족들  -->
        <!-- <family v-if="mode=='가족'"></family> -->
        <!-- 이걸 페이지 단위로 자르자 - 위치정보  -->
        <!-- <location v-if="mode=='위치'"></location> -->
        <!-- <areaDustInfo v-if="mode=='영역'"></areaDustInfo> -->
        <!-- <grid v-if="mode =='표'"></grid>  -->
        <router-view></router-view>
        <footer class="w3-container w3-theme w3-margin-top">
        <h3>0Soo Mobile Front Web Profile Pages</h3>
        </footer>

  </div>
</template>
<script> 
// 실질적으로 동작 로직은 script 부분에서 처리
// 개발할때는 npm run start
// 빌드할때는 npm run build
import axios from 'axios'
  export default {
      // 상태관리(상태)
      data() { 
        return {
          isMenu : false,
          title : this.$route.name,
        }
      },
      // 상태관리(액션)
      methods : {
        menuOpen : function(){
            this.$data.isMenu = true
        },
        menuClose : function(){
            this.$data.isMenu = false
        },
        modeChg : function(mode){
            this.$data.mode = mode
            this.menuClose()
        }
      },
      // 상태
      components : {  //main.vue 컴포넌트에서 다른 컴포넌트(grid,location)
        /*"homepage" : homepage,
        "profile" : profile,
        "family" : family,
        "location" : location,
        "areaDustInfo" : areaDustInfo,
        "grid" : grid*/
      },
      watch:{
        $route (to, from){
          console.log(to.name)
          this.title = to.name
          this.menuClose()
      }
    } 
  }
</script>