

<template>
    <div class="relative flex min-h-screen">

        <div class="bg-green-500 text-cyan-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0  transform -translate-x-full transition duration-200 ease-in-out" :class="{ 'translate-x-0': showSidebar, '-translate-x-full': !showSidebar }">
            <!-- Your Sidebar Logo -->
            <div class="flex justify-between items-center px-4">
            <img src="/logo.png" alt="Your Logo" class="h-12 w-40">
        <!-- </div> -->
            <a href="" class="flex items-center space-x-2 px-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 text-white" 
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </a>
            </div>
            <nav>
                <a href="/dashboard" class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300 transition-duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2l-12 9h3v10h18v-10h3zm0 2v10h-8v-6h-4.984l-0.016 6h-7v-8l-5.5 4.5 1.984 1.516 3.516-2.75v-11.266l7-5.5 7 5.5v8.734l3.516 2.75 1.984-1.516-5.5-4.5v-8.484h-4z"/>
                    </svg>
                    <span class="text-white" >Dashboard</span>
                </a>
                <a href="/calendar" class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <!-- Replace this with your calendar icon SVG code -->
                        <path d="M10 10 L50 50 L90 10 Z" fill="blue" />
                    </svg>
                    <span class="text-white">Calendar</span>
                </a>
                <a href="/staff" class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <!-- Replace this with your staff icon SVG code -->
                        <path d="M12 2 C16.4 2 20 5.6 20 10 C20 13.7 17.6 17.3 14 19.5 C13 20.3 11.5 20.3 10.5 19.5 C6.9 17.3 4.5 13.7 4.5 10 C4.5 5.6 8.1 2 12 2 M12 3 C8.9 3 6.5 6 6.5 10 C6.5 13.3 9.2 16 12 16 C14.8 16 17.5 13.3 17.5 10 C17.5 6 15.1 3 12 3 M12 6 C10.3 6 9 7.3 9 9 C9 10.7 10.3 12 12 12 C13.7 12 15 10.7 15 9 C15 7.3 13.7 6 12 6"/>
                    </svg>
                    <span class="text-white">Staff</span>
                </a>
                <a href="/clients" class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <!-- Replace this with your clients icon SVG code -->
                        <path d="M12 2 C16.4 2 20 5.6 20 10 C20 13.7 17.6 17.3 14 19.5 C13 20.3 11.5 20.3 10.5 19.5 C6.9 17.3 4.5 13.7 4.5 10 C4.5 5.6 8.1 2 12 2 M12 3 C8.9 3 6.5 6 6.5 10 C6.5 13.3 9.2 16 12 16 C14.8 16 17.5 13.3 17.5 10 C17.5 6 15.1 3 12 3 M12 6 C10.3 6 9 7.3 9 9 C9 10.7 10.3 12 12 12 C13.7 12 15 10.7 15 9 C15 7.3 13.7 6 12 6"/>
                    </svg>
                    <span class="text-white">Clients</span>
                </a>
                <a href="/exercises" class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <!-- Replace this with your exercises icon SVG code -->
                        <path d="M12 2 L16 12 L12 22 L8 12 Z" fill="blue" />
                    </svg>
                    <span class="text-white">Exercises</span>
                </a>
                <a href="/workouts" class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <!-- Replace this with your workouts icon SVG code -->
                        <path d="M12 2 L16 12 L12 22 L8 12 Z" fill="green" />
                    </svg>
                    <span class="text-white">Workouts</span>
                </a>
                <a href="/settings" class="flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <!-- Replace this with your settings icon SVG code -->
                        <path d="M12 2 C6.486 2 2 6.486 2 12 C2 17.514 6.486 22 12 22 C17.514 22 22 17.514 22 12 C22 6.486 17.514 2 12 2 M12 3.5 C16.142 3.5 19.5 6.858 19.5 11 C19.5 15.142 16.142 18.5 12 18.5 C7.858 18.5 4.5 15.142 4.5 11 C4.5 6.858 7.858 3.5 12 3.5 M12 8 C11.448 8 11 8.448 11 9 L11 15 C11 15.552 11.448 16 12 16 C12.552 16 13 15.552 13 15 L13 9 C13 8.448 12.552 8 12 8"/>
                    </svg>
                    <span class="text-white">Settings</span>
                </a>
            </nav>
        </div>
        <div class="flex-1">
            <div class="bg-blue shadow px-6 py-4 flex items-center justify-between with-border">
        <div class="flex items-center"> <!-- Create a flex container to align logo and icon -->
            <img src="/logo.png" alt="Your Logo" class="h-12 w-40">
            <button @click="showSidebar = !showSidebar" class="text-cyan-600 font-extrabold ml-6"> <!-- Use ml-2 to add a bit of spacing between the logo and the icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
                </svg>
            </button>
        </div>
        <div>
                    <Menu as="div" class="relative">
                        <div class="flex">
                            <MenuButton class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span class="sr-only">Open user menu</span>
                                <div class="mx-3">
                                    <div class="text-left text-base font-medium leading-none text-white">
                                        {{ user.name }}
                                    </div>
                                    <div class="text-sm font-medium leading-none text-gray-400">
                                        {{ user.email }}
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </MenuButton>
                        </div>
                        <transition
                            enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95"
                        >
                            <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-slot="{}">
                                    <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">Profile</router-link>
                                </MenuItem>
                                <MenuItem v-slot="{}">
                                    <router-link to="/gym-selection" class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">Gym Selection</router-link>
                                </MenuItem>
                                <MenuItem v-slot="{}">
                                    <a @click="logout" :class="['block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Sign out</a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            
            </div>
            <router-view :key="$route.path"></router-view>
       </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
// import Notification from "./Notification.vue";

const navigation = [
  { name: "Dashboard", to: { name: "Dashboard" } },
  { name: "Calendar", to: { name: "Calendar" } },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    // BellIcon,
    // MenuIcon,
    // XIcon,
    // Notification,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const showSidebar = ref(false);

    function logout() {
      store.dispatch('logout')
        .then(() => {
          router.push({
            name: "Login",
          });
        });
    }

    return {
      showSidebar,
      user: computed(() => store.state.user.data),
      navigation,
      logout,
    };
  },
};
</script>

<style>
.with-border {
  border-bottom: 0.5px solid rgb(119, 212, 119); /* Adjust the color and thickness as needed */
}
</style>