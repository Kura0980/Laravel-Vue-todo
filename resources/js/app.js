
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App.vue';
import Home from './components/Home.vue';
import Work from './components/Works.vue';
import store from './store';

const routes = [
    { path: '/', component: Home},
    { path: '/work', component: Work}
];

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
