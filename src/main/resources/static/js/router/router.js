import Vue from 'vue'
import VueRouter from 'vue-router'
import MessageList from "../pages/MessageList.vue"
import Auth from "../pages/Auth.vue"
import Profile from "../pages/Profile.vue"

Vue.use(VueRouter)

// 0. Если используем модульную систему (например через vue-cli),
// импортируем Vue и VueRouter и затем вызываем `Vue.use(VueRouter)`.

// 1. Определяем компоненты для маршрутов.
// Они могут быть импортированы из других файлов

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. Определяем несколько маршрутов
// Каждый маршрут должен указывать на компонент.
// "Компонентом" может быть как конструктор компонента, созданный
// через `Vue.extend()`, так и просто объект с опциями компонента.
// Мы поговорим о вложенных маршрутах позднее.
const routes = [
    {path: '/', component: MessageList},
    {path: '/auth', component: Auth},
    {path: '/profile', component: Profile},
    {path: '*', component: MessageList},
]

// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
// Вы можете передавать и дополнительные опции, но пока не будем усложнять.
export default new VueRouter({
    mode: 'history',
    routes // сокращённая запись для `routes: routes`
})