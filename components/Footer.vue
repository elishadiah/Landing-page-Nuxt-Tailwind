<template>
  <div class="flex flex-col sm:items-center sm:justify-center text-white text-center">
    <div class="flex flex-col sm:items-center mb-10">
      <img class="mb-5" src="~/assets/img/FinaLogo.png" alt="" />
      <p class="font-normal text-[25px]">The Safe Path to Crypto Profits</p>
    </div>
    <div class="flex sm:justify-between w-[170px] mb-10">
      <img v-for="(item, index) in items" :key="index" :src="item" />
    </div>
    <div>
      <p class="text-[18px] font-normal">Copy Rights | COPA 2023</p>
      <p class="text-primary text-[18px] font-normal">All Rights Reserved</p>
    </div>
  </div>
</template>
<script setup>
const items = ['/_nuxt/assets/img/footer_1.png', '/_nuxt/assets/img/footer_2.png', '/_nuxt/assets/img/footer_3.png']
</script>