<template>
  <div class="relative w-[30%] shadow-2xl">
    <div class="rounded-lg bg-card text-white text-center p-6">
      <div class="flex sm:justify-center mb-5">
        <img class="z-10" :src="pic" alt="" />
      </div>
      <p class="text-[26px] font-semibold z-100 w-[70%] text-center mx-auto mb-5">{{ title }}</p>
      <p class="text-[18px] font-normal z-100">
        {{ text }}
      </p>
    </div>
    <div class="absolute top-0 bg-black h-[100%] w-[100%] opacity-20" />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  pic: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
})
const { pic, title, text } = props;
</script>