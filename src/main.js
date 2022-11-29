import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/main.css';
import '@/style/index.less';

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

createApp(App).use(router).use(store).mount('#app');
