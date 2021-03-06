import Vue from 'vue'
import VueRouter from 'vue-router'
import main from './main.vue'
import homepage from "./component/homepage.vue"
import profile from "./component/profile.vue"
import family from "./component/family.vue"
import location from "./component/location.vue"
import areaDustInfo from "./component/areaDustInfo.vue"
import grid from "./component/grid.vue"
import viewSample from "./component/sampleVue.vue"



Vue.use(VueRouter)

const routerConfig = [
  { path: '/', name: "Homepage" ,component: homepage }, 
  { path: '/profile', name: "Profile", component: profile },
  { path: '/family', name: "Family", component: family },
  { path: '/location', name: "Location" ,component: location },
  { path: '/areaDustInfo', name: "AreaMise", component: areaDustInfo },
  { path: '/grid', name: "Grid", component: grid },
  { path: '/viewSample', name:"VueSample", component: viewSample }
]

const router = new VueRouter({  // new VueRouter(생성자)를 생성할때, 맨 마지막의 선언한 것으로 셋팅 됨
  routes : routerConfig         // `routes: routes`의 줄임 컴포넌트와 url 셋팅
})

 var vueApp = new Vue({
  render: h => h(main),
  router
}).$mount('#app')

window.vueApp = vueApp;
