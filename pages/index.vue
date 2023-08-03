import { AppHeader } from '../.nuxt/components';
<template>
  <div class="flex flex-wrap">
    <div
      class="flex flex-col items-center w-1/6 h-screen gap-6 rounded-tr-[25px] rounded-br-[25px] bg-[#702f61]"
    >
      <AppHeader class="mt-6" />
      <AppHeader />
      <AppHeader />
    </div>
    <div class="w-5/6 bg-slate-500 flex flex-col">
      <!-- header -->
      <div class="flex justify-between">
        <div class="">06</div>
        <div>07</div>
      </div>
      <div class="flex flex-col md:flex-row justify-between">
        <div>08</div>
        <div>09</div>
      </div>
    </div>
  </div>
</template>
