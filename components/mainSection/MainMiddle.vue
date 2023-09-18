<template>
  <div class="mb-20">
    <div class="px-20 mb-16">
      <p class="text-primary text-[55px] font-bold text-center">Empower Your Crypto Journey</p>
      <p class="text-white text-mh-m-size font-medium text-center mb-10">
        Precision, Protection, and Profitability in Every Trade.
      </p>
      <p class="text-white text-center text-[20px]">
        Delve into a world where security meets sophistication, and risks are tamed. With COPA, every trade is a
        calculated
        step, backed by cutting-edge technology and a commitment to safeguarding your assets.
      </p>
    </div>
    <div class="flex sm:justify-between sm:items-center">
      <MainSectionCardComponent1 :pic="cardItems[ 0 ].pic" :title="cardItems[ 0 ].title" :text="cardItems[ 0 ].text" />
      <MainSectionCardComponent2 />
      <MainSectionCardComponent1 :pic="cardItems[ 1 ].pic" :title="cardItems[ 1 ].title" :text="cardItems[ 1 ].text" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const cardItems = [
  {
    pic: '/_nuxt/assets/img/card1.png',
    title: 'Fortified Privacy & Protection',
    text: 'State-of-the-art encryption and strict security protocols ensure your data remains uncompromised and safe.',
  },
  {
    pic: '/_nuxt/assets/img/card3.png',
    title: 'Steady Gains, Stable Strategy',
    text: 'Our focus on delta neutral trades minimizes market volatility exposure, maximizing returns with minimal risks.',
  },
]
</script>