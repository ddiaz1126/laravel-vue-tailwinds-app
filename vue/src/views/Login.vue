<template>
  <div class="container mx-auto mt-8">
  <!-- Main Content -->
    <main class="p-4">
      <!-- Centered Registration and Login Box -->
      <div class="w-full max-w-md mx-auto mt-30">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 class="text-xl mb-4">Login</h2>
          <div class="text-sm text-gray-700 mb-4">Welcome back! </div>
          <form @submit="login">
            <div v-if="errorMsg" class="py-3 px-5 bg-red-500 text-white rounded">
              {{ errorMsg }}
              <span @click="clearErrorMessage" class="cursor-pointer ml-2">
                <!-- SVG for closing error message -->
              </span>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                <!-- Email -->
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:ring-green-500 focus:border-green-500"
                id="email"
                v-model="user.email"
                type="email"
                placeholder="Email"
                
                autocomplete="email"
              />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  <!-- Password -->
                </label>
                <div class="relative">
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-green-500 focus:border-green-500"
                    id="password"
                    v-model="user.password"
                    placeholder="Password"
                    
                  />
                  <!-- <button  (this goes above bw id and placeholder->:type="showPassword ? 'text' : 'password'")
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 pr-3"
                    @click="showPassword = !showPassword"
                  >
                    {{ showPassword ? 'Hide' : 'Show' }}
                  </button> -->
                </div>
            </div>
            <div class="mb-4 flex items-center justify-between" style="margin-top: -20px;">
              <!-- Remember Me checkbox placed to the left of the Forgot Password link -->
              <label class="flex items-center text-gray-700 text-sm font-normal">
                <input
                  class="form-checkbox text-blue-500 h-4 w-4"
                  type="checkbox"
                  v-model="user.remember"
                />
                <span class="ml-2">Remember Me</span>
              </label>
              <a class="block text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
            <!-- Register and Log In Buttons -->
            <div class="flex items-center justify-center h-full">
              <!-- <router-link :to="{ name: 'Register' }" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Register
              </router-link> -->
              <div class="text-center"> <!-- Centered Log In button -->
                <button
                  class="bg-white hover:bg-green-500 text-black font-bold py-3 px-12 rounded border-2 border-green-500 focus:outline-none focus:shadow-outline"
                  type="submit"
                  style="margin-top: 20px"
                >
                  Log In
                </button>
              </div>
            </div>
            <!-- <div class="flex items-center justify-center mt-4">
              <hr class="flex-grow bg-gray-300 h-0.5">
              <span class="mx-4 text-gray-500">or</span>
              <hr class="flex-grow bg-gray-300 h-0.5">
            </div>
            <div class="text-center"> -->
            <!-- <button
              class="bg-blue-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign in with Gmail
            </button> -->
          <!-- </div> -->

          </form> <!-- Close the form -->
        </div>
          <div class="text-center mt-4">
            <span style="text-black text-sm font-normal font-['Inter']">Not a member yet?</span>
            <router-link :to="{ name: 'Register' }" class="text-sky-600 text-sm font-normal font-['Inter'] ml-2">Register</router-link>
          </div>
      </div>
    </main>
  </div>
</template>



<script setup>
// import { LockClosedIcon } from '@heroicons/vue/outline'
import { useRouter } from "vue-router";
import store from "../store";
import {ref} from "vue";

const router = useRouter();

const user = {
  email: "",
  password: "",
  remember: false
}
let errorMsg = ref('')

function login(ev) {
  ev.preventDefault();

  store.dispatch('login', user)
    .then(() => {
      router.push({
        name: 'Dashboard'
      })
      })
    .catch(err => {
      errorMsg.value = err.response.data.error
  });
}
</script>