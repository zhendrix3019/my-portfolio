import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'; // Import the Vuetify instance
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure Font Awesome CSS is available
import VueParticles from "vue-particles"; // Import VueParticles

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add Font Awesome icons to the library
library.add(faChevronUp, faChevronDown);

const app = createApp(App);

// Register global components and plugins
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(vuetify);

app.mount('#app');
