import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import './registerServiceWorker'
import DateFilter from './filters/date'
import AlertComponent from './components/Shared/Alert.vue'

Vue.config.productionTip = false

// register components
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComponent)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDRiWYFSdiPbmlmy9NsD4m8kWTdoLUnRGI',
      authDomain: 'meetupbm.firebaseapp.com',
      databaseURL: 'https://meetupbm.firebaseio.com',
      projectId: 'meetupbm',
      storageBucket: 'meetupbm.appspot.com'
    })
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
