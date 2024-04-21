import {createRouter, createWebHistory } from 'vue-router';
import Recent from '../view/Recent.vue'

const routes = [
    {
        path: '/recent',
        name: 'recent',
        component:Recent
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;