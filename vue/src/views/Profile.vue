<template>
    <div class="min-h-screen flex justify-center pt-8 bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-4/5">
        <div class="flex flex-col md:flex-row items-center">
          <!-- User Icon on the left -->
          <div class="text-center mb-4 md:mb-0 md:mr-8">
            <img
              v-if="form.image_url"
              :src="form.image_url"
              alt="User Photo"
              class="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
            />
            <img
              v-else
              alt=""
              class="w-32 h-32 mx-auto text-gray-500 rounded-full border-4 border-transparent"
              @mouseover="addBlueBorder"
              @mouseout="removeBlueBorder"
            />
            <input
              type="file"
              @change="uploadPhoto"
              style="display: none"
              ref="fileInput"
            />
            <button @click="openPhotoUpload" class="text-blue-500 mt-2">Select a new Photo</button>
          </div>
  
          <!-- Name and Email on the right -->
          <div class="w-full md:w-3/5">
            <!-- Name Input -->
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium">Name</label>
              <input v-model="form.name" id="name" type="text" class="w-full rounded-md border p-2">
            </div>
  
            <!-- Email Input -->
            <div>
              <label class="block text-gray-700 font-medium">Email</label>
              <input v-model="form.email" id="email" type="email" class="w-full rounded-md border p-2">
            </div>
                      <!-- Save Button -->
                <button @click="saveUserProfile" class="text-white bg-green-500 rounded-md p-2 mt-4 hover:bg-green-600">Save</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
    
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: {
          name: "",
          email: "",
          image: "", // Initialize as an empty string
          image_url: "", // Initialize as an empty string
        },
      };
    },
    created() {
      // Fetch user profile data from the API
      axios.get('/api/profile/show')
        .then((response) => {
          // Assuming your API response contains user data like 'name', 'email', and 'image_url'
          this.user = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    methods: {
      openPhotoUpload() {
        // Define fileInput here
        // const fileInput = this.$refs.fileInput;
        this.$refs.fileInput.click();
      },
      uploadPhoto(ev) {
        const file = ev.target.files[0];
  
        const reader = new FileReader();
        reader.onload = () => {
          this.user.image = reader.result;
          this.user.image_url = reader.result;
        };
        reader.readAsDataURL(file);
      },
      async saveUserProfile() {
        const formData = new FormData();
        formData.append('name', this.user.name);
        formData.append('email', this.user.email);
        // Check if a new image is selected
        if (this.user.image) {
          formData.append('image', this.user.image);
        }
        for (const pair of formData.entries()) {
          console.log(pair[0], pair[1]);
        }
        try {
          // Make an API request to update the user profile with potential image
          const response = await axios.post('/api/update-user-profile', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          // Handle the response, which may include the updated user's image URL
          if (response.data && response.data.image_url) {
            this.user.image_url = response.data.image_url;
          }
          // Display a success message or perform any other necessary actions
        } catch (error) {
          console.error(error);
          this.errorMessage = "An error occurred while saving your profile. Please try again.";
  
          // Handle errors, display an error message, etc.
        }
      },
    },
  };
  </script>


  
