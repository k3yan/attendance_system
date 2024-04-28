<template>
  <div class="w-auto h-screen">
    <img src="../assets/bgbook.jpg" alt="bg-image" class="absolute w-full h-full"/>
      <div class="absolute mt-4 ml-[2rem] flex justify-between gap-3 bg-cover">
        <img src="../assets/emanuscript-logo.png" alt="logo" class="flex h-[7rem] rounded-full" />
        <div class="text-white mt-[2rem] text-5xl italic">
          eManuscript Attendance
        </div>
      </div>
    <div class="absolute flex flex-col text-gray-700 bg-gradient-to-bl from-yellow-100 to-red-800 shadow-md w-96 rounded-xl bg-clip-border mt-[19rem] ml-[40rem]">
  <div class="">
    <div>
    <button @click="showTable = !showTable" class="py-1 px-1 bg-red-400 rounded ml-[22rem] mt-2">
      <img src="../assets/rightangle.png" alt="arrow" class="h-[1rem]" />
    </button>
    
    <div v-if="showTable" class="flex justify-end mt-2 transform transition-transform duration-500 ease-in-out translate-x-[20rem]">
      <div class="absolute bg-gradient-to-bl from-yellow-100 to-red-800 rounded-lg w-[20rem] h-[20rem]">
        <div class="flex justify-end mt-2 mr-2">
          Recently Confirmed
        </div>
      <div class="flex justify-center mt-2 px-1 py-auto">
      <table class="border-collapse border-2 border-gray-500 absolute">
        <thead class="">
          <tr class="">
            <th class="border border-gray-500 px-10">Student ID</th>
          </tr>
        </thead>
        <tbody>
      <tr v-for="(row, index) in tableData" :key="index">
        <td class="px-4 py-2">{{ row.value }}</td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    </div>
  </div>
    <img class="h-[10rem] ml-[7rem] flex" src="../assets/librarylogo.png">
  </div>
  <form @submit.prevent="addRow">
  <div class="flex flex-col gap-4 p-6">
    <div class="relative h-11 w-full min-w-[200px]">
      <input
        class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-gray-900 
        border-t-transparent text-white outline outline-0 placeholder-shown:border placeholder-shown:border-blue-100 placeholder-shown:border-t-blue-100 
        focus:border-2 focus:border-gray-100 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-50"
        placeholder=" " v-model="inputValue" type="text" />
      <label
        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none 
        !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-200 transition-all before:pointer-events-none 
        before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l
         before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 
         after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-100 after:transition-all peer-placeholder-shown:text-sm 
         peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-100 peer-placeholder-shown:before:border-transparent 
         peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 
         peer-focus:before:border-l-2 peer-focus:before:!border-blue-200 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-200 
         peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-500">
        ID Number:
      </label>
    </div>
  </div>
  <div class="p-6 pt-0">
    <button
      class="block w-full select-none rounded-lg bg-gradient-to-tr from-red-950 to-gray-900 py-3 px-6 text-center 
      align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg
       hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="submit">
      Confirm
    </button>
  </div>
</form>
</div>
  </div>
</template>

<script>
export default {
data() {
    return {
      showTable: false,
      inputValue: '',
      tableData: [],
    }
  },
  methods: {
    toggleTable() {
      this.showTable = !this.showTable;
    },
    addRow(){
      if (this.inputValue !== ''){
        this.tableData.push({value: this.inputValue});
        this.inputValue = '';
      }
    }
  },
};
</script>
