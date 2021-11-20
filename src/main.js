import Vue from 'vue'
import App from './App.vue'
import './assets/js/rem'
import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.use(animated)

import {Button} from 'vant';
import 'vant/lib/index.css';

Vue.use(Button);
import {Calendar} from 'vant';

Vue.use(Calendar);
import {DatetimePicker} from 'vant';

Vue.use(DatetimePicker);

import {Overlay} from 'vant';

Vue.use(Overlay);
import {Field} from 'vant';

Vue.use(Field);
import {Icon} from 'vant';

Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
