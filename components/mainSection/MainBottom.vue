<template>
  <div class="flex sm:justify-between sm:items-center py-20">
    <div class="w-[45%]">
      <img src="~/assets/img/mbImg.png" alt="" />
    </div>
    <div class="text-white mx-10 w-[45%]">
      <p class="font-bold text-[45px] mb-20"><span class="text-primary">Seamless Integration</span> with the Crypto Universe!</p>
      <div>
        <div v-for="(item, index) in items" class="flex mb-5 sm:justify-between" :key="index">
          <div class="w-[3%] pt-3">
            <img src="~/assets/img/mbIcon.png" alt="" />
          </div>
          <div class="w-[95%] text-[18px]">
            <p class="font-bold">{{ item.title }}</p>
            <p class="font-normal">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    title: 'Unified Access',
    text: 'Connect instantly to the leading exchanges, all from one platform.',
  },
  {
    title: 'Optimized Opportunities',
    text: 'Harness the power of aggregated data for smarter, more profitable trades.',
  },
  {
    title: 'Consistent Updates',
    text: 'Stay ahead with real-time sync and continuous enhancements.',
  },
]
</script>