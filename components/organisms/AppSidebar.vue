<template>
  <div
    v-for="data in datalist"
    :key="data.id"
    class="flex flex-col items-center p-4"
  >
    <img :src="'/img/' + data.icon" alt="" srcset="" />
    <p class="text-base text-center text-white">{{ data.name }}</p>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import sidebardata from "@/data/sidebardata.json";
const datalist = reactive(sidebardata);
onMounted(() => {
  console.log(datalist[0]);
});
</script>
