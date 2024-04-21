<template>
<div class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-md w-1/2">
      <h2 class="text-lg font-semibold mb-4">Toggleable Form</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-sm font-semibold mb-2">Name</label>
          <input type="text" id="name" v-model="formData.name" class="form-input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-semibold mb-2">Email</label>
          <input type="email" id="email" v-model="formData.email" class="form-input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
        </div>
        <!-- Add more form fields as needed -->
        <div class="flex justify-end">
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300">Submit</button>
          <button @click="closeForm" class="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-gray-300">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>
