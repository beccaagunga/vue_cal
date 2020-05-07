import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAeR5K-GPKhHMDLSu0Lg_iojflrYyNMrlw",
  authDomain: "vue-calender-6ab95.firebaseapp.com",
  databaseURL: "https://vue-calender-6ab95.firebaseio.com",
  projectId: "vue-calender-6ab95",
  storageBucket: "vue-calender-6ab95.appspot.com",
  messagingSenderId: "289089339102",
  appId: "1:289089339102:web:90a1a74032a83b703fcc4f"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
