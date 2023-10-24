import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import DefaultLayout from "../components/DefaultLayout.vue";
import Sidebar from "../components/Sidebar.vue";
import Staff from "../views/Staff.vue"
import Clients from "../views/Clients.vue"
import Exercises from "../views/Exercises.vue"
import Workouts from "../views/Workouts.vue"
import Settings from "../views/Settings.vue"
import AuthLayout from "../components/AuthLayout.vue";
import Calendar from "../views/Calendar.vue"
import GymSelection from "../views/GymSelection.vue";
import Profile from "../views/Profile.vue";
import store from '../store';



const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: Sidebar,
        meta: { isGuest: true, hideSidebar: true },
        children: [
            {path: '/dashboard', name: 'Dashboard', component: Dashboard},
            // {path: '/sidebar', component: Sidebar},
            {path: '/staff', name: 'Staff', component: Staff},
            {path: '/clients', name: 'Clients', component: Clients},
            {path: '/exercises', name: 'Exercises', component: Exercises},
            {path: '/workouts', name: 'Workouts', component: Workouts},
            {path: '/settings', name: 'Settings', component: Settings},
            { path: '/gym-selection', name: 'GymSelection', component: GymSelection },
            { path: '/calendar', name: 'Calendar', component: Calendar },
            { path: '/profile', name: 'Profile', component: Profile }
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta: {isGuest: true},
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
            // {
            //     path: '/calendar',
            //     name: 'Calendar',
            //     component: Calendar
            // },
            // {
            //     path: '/gym-selection',
            //     name: 'GymSelection',
            //     component: GymSelection
            // }    
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' })
    // } else if (store.state.user.token && (to.meta.isGuest)) {
    //     next({ name: 'Dashboard' });
    } else {
        // Add a meta field to specify whether the sidebar should be shown
        if (to.meta.hideSidebar) {
            // If the route has meta.hideSidebar set to true, don't show the sidebar
            store.commit('setShowSidebar', false); // You may need to adjust this mutation based on your store setup
        } else {
            // Show the sidebar for other routes
            store.commit('setShowSidebar', true); // You may need to adjust this mutation based on your store setup
        }
        next();
    }
});

export default router;