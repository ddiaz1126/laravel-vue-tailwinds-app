<template>
    <div>
      <div class="w-full max-w-md mx-auto mt-5">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="register">
          <h2 class="text-xl mb-4">Register</h2>
          <div class="text-sm text-gray-700 mb-4">Please fill out this form to get an account! </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="fullname">
              <!-- Full Name -->
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:ring-green-500 focus:border-green-500"
              id="fullname"
              type="text"
              placeholder="Full Name"
              v-model="user.name"
              autocomplete="name"
            />
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              <!-- Email -->
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:ring-green-500 focus:border-green-500"
              id="email"
              type="email"
              placeholder="Email"
              v-model="user.email"
              autocomplete="email"
            />
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              <!-- Password -->
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:ring-green-500 focus:border-green-500"
              id="password"
              type="password"
              v-model="user.password"
              placeholder="Password"
              
            />
          </div>
          
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-1" for="password_confirmation">
              <!-- Confirm Password -->
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:ring-green-500 focus:border-green-500"
              id="password_confirmation"
              type="password"
              placeholder="Confirm Password"
              v-model="user.password_confirmation"
              autocomplete="new-password"
            />
          </div>
          
          <!-- Checkbox for "I agree to the Terms of Service and Privacy Policy" -->
          <!-- <div class="mb-4">
            <input
              class="form-checkbox h-4 w-4 text-blue-600"
              type="checkbox"
              id="agreeToTerms"
              v-model="form.agreeToTerms"
            />
            <label
              class="block text-gray-700 text-sm font-bold mb-2 ml-2"
              for="agreeToTerms"
            >
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div> -->
          
          <div class="text-center">
            <button
              class="bg-white hover:bg-green-500 text-black font-bold py-3 px-12 rounded border-2 border-green-500 focus:outline-none focus:shadow-outline"
              type="submit"
              style="margin-top: 20px"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div class="text-center mt-0">
        <span style="text-black text-sm font-normal font-['Inter']">Already a Member?</span>
        <router-link :to="{ name: 'Login' }" class="text-sky-600 text-sm font-normal font-['Inter'] ml-2">Login</router-link>
      </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
// import { LockClosedIcon } from "@heroicons/vue/solid";
import store from "../store";
import { useRouter } from "vue-router";
// import Alert from "../components/Alert.vue";

const router = useRouter();
const user = {
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
};

function register(ev) {
  ev.preventDefault();
  // loading.value = true;
  store
    .dispatch("register", user)
    .then((res) => {
      // loading.value = false;
      router.push({
        name: "Dashboard",
      });
    })
    // .catch((error) => {
    //   loading.value = false;
    //   if (error.response.status === 422) {
    //     errors.value = error.response.data.errors;
    //   }
    // });
}

</script>