import Vue from 'vue'
import main from './main.vue'

 var vueApp = new Vue({
  render: h => h(main)
}).$mount('#app')

window.vueApp = vueApp;