import {createRouter, createWebHistory } from 'vue-router';
import userProfile from '../view/userProfile.vue';

const routes = [
    {
        path: '/userprofile',
        name: 'userprofile',
        component:userProfile
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;