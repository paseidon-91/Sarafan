import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/App.vue'

Vue.use(VueResource)

new Vue({
    el: '#app',
    render: a => a(App)
})

/*
function getIndex(list, id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === id) {
            return i;
        }
    }
    return -1;
}

var messageApi = Vue.resource('/message{/id}');

Vue.component('message-form', {
})


*/
