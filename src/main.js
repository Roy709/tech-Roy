import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyBR-RVR1xry43zaF4chgHw46oVeTxO2zc8",
    authDomain: "front-end-b2c1d.firebaseapp.com",
    projectId: "front-end-b2c1d",
    storageBucket: "front-end-b2c1d.appspot.com",
    messagingSenderId: "320629259147",
    appId: "1:320629259147:web:69d2a90ff3199b09bf4d8e"
  };

firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
