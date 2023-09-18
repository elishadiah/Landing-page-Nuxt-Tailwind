<template>
  <div class="flex sm:justify-between sm:items-center pt-16 mb-20">
    <div>
      <img src="~/assets/img/FinaLogo.png" alt="" />
    </div>
    <ul class="flex sm:justify-center space-x-14">
      <li class="flex text-center" v-for="(item, index) in menuItem" :key="index">
        <a :href="item.url" class="rounded-sm" :class="item.color">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const menuItem = [
  { title: 'Home', url: '#', color: 'text-[22px] font-bold text-primary bg-transparent', },
  { title: 'App', url: '#', color: 'text-[22px] font-normal text-white bg-transparent', },
  { title: 'Join Whitelist', url: '#', color: 'text-[20px] font-normal text-black bg-menuItem px-6', },
]
</script>