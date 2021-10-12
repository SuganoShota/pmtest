import Vue from 'vue'
import App from './App.vue'
import * as vueVisNetwork from "vue-vis-network";

Vue.config.productionTip = false

Vue.component('network', vueVisNetwork.Network);


new Vue({
  render: h => h(App),
}).$mount('#app')
