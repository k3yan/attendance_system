<template>
  <div class="absolute flex flex-col text-gray-700 bg-gradient-to-bl from-red-950 to-gray-950 shadow-md w-96 rounded-xl bg-clip-border mt-[20rem] ml-[50rem]">
  <div class="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-red-950 to-gray-900 bg-clip-border shadow-gray-900/20">
    <h3 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white italic">
      eManuscript
    </h3>
  </div>
  <div class="">
    <img class="h-[10rem] ml-[7rem] flex" src="../assets/librarylogo.png">
  </div>
  <div class="flex flex-col gap-4 p-6">
    <div class="relative h-11 w-full min-w-[200px]">
      <input
        class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-gray-900 border-t-transparent text-white outline outline-0 placeholder-shown:border placeholder-shown:border-blue-100 placeholder-shown:border-t-blue-100 focus:border-2 focus:border-gray-100 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-50"
        placeholder=" " v-model="inputValue" />
      <label
        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-200 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-100 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-100 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-200 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-200 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-500">
        ID Number:
      </label>
    </div>
  </div>
  <div class="p-6 pt-0">
    <button
      class="block w-full select-none rounded-lg bg-gradient-to-tr from-red-950 to-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button" @click="logInput">
      Confirm
    </button>
    <label class="text-white">
      Recently Confirmed:
    </label>
    <div class="flex items-end">
    <button 
      @click="toggleFormVisibility" 
      :class="{
        'bg-blue-500 hover:bg-blue-600': !showForm,
        'bg-gray-300 cursor-not-allowed': showForm
      }"
      class="px-4 py-2 rounded-md text-white focus:outline-none"
      :disabled="showForm"
    >
      {{ showForm ? 'Close Form' : 'Open Form' }}
    </button>
    <!-- Form -->
    <transition name="slide">
      <div v-if="showForm" class=" inset-y-[10rem] right-[10rem] z-10 flex justify-center items-center bg-black bg-opacity-50">
        <div class="bg-white shadow-md rounded px-8 py-6">
          <!-- Your form content goes here -->
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
              </label>
              <input v-model="formData.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
            </div>
            <!-- Add more form fields as needed -->
            <div class="flex justify-end">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
              <button @click="hideForm" class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>
   </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      showForm: false,
      formData: {
        username: '',
        // Add more form fields as needed
      }
    };
  },
  methods: {
    logInput() {
      console.log(this.inputValue);
    },
    toggleFormVisibility() {
      this.showForm = !this.showForm;
    },
    hideForm() {
      this.showForm = false;
      this.resetFormData();
    },
    submitForm() {
      // Handle form submission logic
      console.log('Form submitted with data:', this.formData);
      this.hideForm();
    },
    resetFormData() {
      this.formData = {
        username: '',
        // Reset other form fields as needed
      };
    }
  },
};
</script>
<style>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>