<template>
  <div class="flex w-screen">
    <div>
      <InputPage />
    </div>
    <div class="w-full">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import InputPage from "./components/InputPage.vue";
</script>
