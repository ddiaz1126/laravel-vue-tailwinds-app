<template>
    <div class="min-h-screen bg-gray-200 flex items-center justify-center">
      <div class="max-w-md w-full space-y-0">
        <div class="container mx-auto">
        <img src="/logo.png" alt="Your Logo" class="mx-auto mt-5" style="max-width: 200px; max-height: 100px;" />
      </div>
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  // import { LockClosedIcon } from '@heroicons/vue/solid'
  
  export default {
    components: {
      // LockClosedIcon,
    },
  }
  </script>