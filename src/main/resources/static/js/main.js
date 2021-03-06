import Vue from 'vue'
import '@babel/polyfill'
import 'api/resource'
import App from 'pages/App.vue'
import store from 'store/store'
import router from 'router/router'
import { connect } from "./util/ws"
import 'vuetify/dist/vuetify.min.css'
import Vuetify from "vuetify"

if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify)

new Vue({
    el: '#app',
    store,
    router,
    render: a => a(App),
    vuetify: new Vuetify({}),
})
