import Vue from 'vue'
import VueResource from 'vue-resource'
import 'api/resource'
import App from 'pages/App.vue'
import { connect } from "./util/ws"
import 'vuetify/dist/vuetify.min.css'
import Vuetify from "vuetify"

if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify)

new Vue({
    el: '#app',
    render: a => a(App),
    vuetify: new Vuetify({}),
})
