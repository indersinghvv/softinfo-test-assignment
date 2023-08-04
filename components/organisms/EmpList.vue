<template>
  <div
    class="w-full md:w-1/2 rounded-[29px] bg-white border border-[#e1e1e1]"
    style="box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.08)"
  >
    <div class="m-12">
      <!-- form heading -->
      <div class="flex justify-between">
        <div class="w-10/12">
          <p class="text-lg md:text-2xl font-bold text-left text-[#4a4a4a]">
            View Employee (15)
          </p>
        </div>
        <div class="w-2/12 relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            class="md:h-10 rounded-lg border border-[#e9e9e9] pl-10 w-full"
            placeholder="Search"
            v-model="searchquery"
          />
        </div>
      </div>
      <div class="flex flex-col overflow-auto h-[350px] mt-8">
        <div
          class="flex justify-between pb-4 items-center"
          v-for="emp in filteredEmp"
          :key="emp.id"
        >
          <div class="flex gap-6 items-center">
            <div>
              <img
                :src="emp.user_image"
                class="rounded-full"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <p
                class="w-[112.95px] text-lg font-bold text-left text-[#313333]"
              >
                {{ emp.display_name }}
              </p>
            </div>
          </div>

          <div>
            <button
              class="bg-[#702F61] text-white rounded-lg px-12 py-1.5 text-center font-normal"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import empdata from "@/data/empdata.json";
let searchquery = ref("");
let empdatalist = reactive(empdata);
let filteredEmp = reactive(empdata);
function searchEmp() {
  if (searchquery.value.length >= 1) {
    filteredEmp = empdatalist.filter((item) => {
      return item.display_name
        .toLocaleLowerCase()
        .includes(searchquery.value.toLocaleLowerCase());
    });
  } else {
    filteredEmp = empdatalist;
  }
}
// watching search query
watch(searchquery, (newq, oldq) => {
  searchEmp(newq);
});

// onMounted(() => {
//   console.log(empdatalist[0]);
// });
</script>