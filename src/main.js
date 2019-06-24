// function
import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style4.css';

// icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// template
import Datepicker from 'vuejs-datepicker';



export default {

  components: {
    Datepicker,
  
  }
}

library.add(faPen,faPlus,faMinus,faSearch,faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(require('vue-moment'));
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
