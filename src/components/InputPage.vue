<template>
  <div class="w-full h-[100vh]">
    <!--Logo-->
    <div class="flex absolute">
      <img
        src="../assets/eMyellow.png"
        alt="system-logo"
        class="h-[10rem] mb-[20rem] ml-[10rem]"
      />
    </div>
    <!--Form-->
    <div class="flex justify-center">
      <div
        class="flex flex-col text-gray-700 bg-gray-200 shadow-md w-[30rem] rounded-xl bg-clip-border mt-[10rem] ml-[30rem] h-[30rem]"
      >
        <div class="">
          <div>
            <!--Arrow-btn-->
            <button
              @click="showTable = !showTable"
              class="py-1 px-1 bg-red-800 rounded ml-[28rem] mt-2"
            >
              <img
                src="../assets/rightangle.png"
                alt="arrow"
                class="h-[1rem]"
              />
            </button>
            <div
              v-if="showTable"
              class="flex justify-end transform transition-transform duration-500 ease-in-out translate-x-[21rem]"
            >
              <!--Sideform-->
              <div class="absolute bg-gray-200 rounded-lg w-[20rem] h-[27rem]">
                <div class="flex justify-between mt-2 ml-2">
                  <div
                    class="bg-red-950 capitalize text-white rounded-md py-1 px-2 font-bold italic"
                  >
                    RECENT
                  </div>
                  <div>
                    <!--Date Picker-->
                    <div class="w-[13rem] mr-[1rem]">
                      <VueDatePicker
                        v-model="date"
                        :flow="flow"
                        placeholder="Date & Time"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-center mt-2 px-1 py-auto">
                  <table
                    class="border-collapse border-2 border-red-950 absolute w-[19rem]"
                  >
                    <thead class="">
                      <tr class="">
                        <th class="border border-red-950 px-9">Student ID</th>
                      </tr>
                    </thead>
                    <!--table body-->
                    <tbody
                      class="overflow-y-scroll w-full flex flex-col justify-between h-[21rem]"
                    >
                      <tr v-for="(row, index) in tableData" :key="index">
                        <td class="px-4 py-2 flex justify-between">
                          {{ row.value }}
                          <!--Action btn-->
                          <div class="gap-2">
                            <div class="flex justify-end">
                              <button
                                class="bg-red-950 text-white active:bg-yellow-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                              >
                                <router-link to="/userprofile"
                                  >View</router-link
                                >
                              </button>
                              <button
                                class="bg-red-950 text-white active:bg-yellow-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                @click="delbtn(index)"
                              >
                                Del
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!--Liceo-Logo-->
          <div class="flex justify-center">
            <img
              class="h-[18rem]"
              src="../assets/librarylogo.png"
              alt="library logo"
            />
          </div>
        </div>
        <!--Form-->
        <form @submit.prevent="addRow">
          <div class="flex flex-col gap-4 p-6">
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-gray-900 border-t-transparent text-gray-950 outline outline-0 placeholder-shown:border placeholder-shown:border-red-950 placeholder-shown:border-t-red-950 focus:border-2 focus:border-yellow-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-50"
                placeholder=" "
                v-model="inputValue"
                type="number"
              />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-600 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-red-950 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500"
              >
                STUDENT ID:
              </label>
            </div>
          </div>
          <div class="p-6 pt-0 flex justify-end gap-4">
            <button
              class="select-none rounded-lg bg-gradient-to-tr from-red-950 to-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Confirm
            </button>
            <button
              class="select-none rounded-lg bg-gradient-to-tr from-red-950 to-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              @click="clearbtn"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const date = ref();
const flow = ref(["month", "year", "calendar"]);

export default {
  data() {
    const date = ref();
    return {
      showTable: false,
      inputValue: "",
      tableData: [],
      date,
      flow,
    };
  },
  methods: {
    toggleTable() {
      this.showTable = !this.showTable;
    },
    addRow() {
      if (this.inputValue !== "") {
        this.tableData.push({ value: this.inputValue });
        this.inputValue = "";
      }
    },
    clearbtn() {
      this.inputValue = "";
    },
    delbtn(index) {
      this.tableData.splice(index, 1);
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
