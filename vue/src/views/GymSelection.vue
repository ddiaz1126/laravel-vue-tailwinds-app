<template>
    <div class="bg-gray-100">
      <h1 class="text-2xl font-bold">Gym Selection</h1>
  
      <div class=" container mx-auto px-4 mt-4 bg-white p-4 rounded shadow-md">
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-lg font-semibold text-green-500">Current Location</h2>
          </div>
          <div class="border p-4">
            <p>{{ currentGym }}</p>
          </div>
        </div>
  
        <div class="mb-4">
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-lg font-semibold text-green-500">Select Location from List Below</h2>
          </div>
          <div class="mt-4">
            <ul>
              <li v-for="gym in gymList" :key="gym.id">
                <label class="flex items-center border p-4">
                  <input type="checkbox" v-model="selectedGyms" :value="gym.id" class="mr-2">
                  {{ gym.name }}
                </label>
              </li>
            </ul>
          </div>
        </div>
  
        <div class="flex items-end justify-end">
          <button @click="cancelSelection" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">Cancel</button>
          <button @click="saveSelection" class="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        currentGym: 'Your Current Gym Name', // You can replace this with actual data
        gymList: [
          { id: 1, name: 'Gym A' },
          { id: 2, name: 'Gym B' },
          { id: 3, name: 'Gym C' },
          // Add more gyms as needed
        ],
        selectedGyms: [], // Use this array to store selected gym IDs
      };
    },
    methods: {
      cancelSelection() {
        // Handle cancel button click
      },
      saveSelection() {
        // Handle save button click and use this.selectedGyms to access the selected gym IDs
      },
    },
  };
  </script>


<style scoped>

</style>
