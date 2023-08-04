import import { UnwrapRef from 'vue';
<template>
  <div
    class="w-full md:w-1/2 rounded-[29px] bg-white border border-[#e1e1e1]"
    style="box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.08)"
  >
    <div class="m-12">
      <!-- form heading -->
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-bold text-left text-[#4a4a4a]">
            Employee Info
          </p>
        </div>
        <div class="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M13.6286 4.37016L19.6294 10.3709L6.59893 23.4014L1.24876 23.992C0.532526 24.0712 -0.072614 23.4656 0.0070714 22.7494L0.602368 17.3954L13.6286 4.37016ZM23.3408 3.47675L20.5233 0.659162C19.6444 -0.219721 18.2189 -0.219721 17.3401 0.659162L14.6893 3.30987L20.6901 9.31066L23.3408 6.65994C24.2197 5.78059 24.2197 4.35563 23.3408 3.47675Z"
              fill="#702F61"
            ></path>
          </svg>
          <p
            class="w-[49px] text-[22px] font-bold text-center text-[#42403a] pl-2"
          >
            EDIT
          </p>
        </div>
      </div>
      <form @submit="handlesave">
        <div class="mt-10">
          <input
            v-model="userdata.display_name"
            class="h-16 rounded-lg border border-[#e9e9e9] block p-2.5 w-full"
            placeholder="Display Name"
            required
          />
        </div>
        <div class="pt-3">
          <input
            v-model="userdata.login_id"
            class="h-16 rounded-lg border border-[#e9e9e9] block p-2.5 w-full"
            placeholder="Login Id"
            required
          />
        </div>
        <div class="pt-3">
          <input
            v-model="userdata.password"
            class="h-16 rounded-lg border border-[#e9e9e9] block p-2.5 w-full"
            placeholder="Password"
            required
          />
        </div>
        <div class="flex justify-between mt-3">
          <div>
            <p class="text-xl font-bold text-left text-[#4a4a4a]">Status</p>
          </div>
          <div>
            <label
              class="relative inline-flex items-center mb-5 cursor-pointer"
            >
              <input
                v-model="userdata.is_active"
                type="checkbox"
                :value="userdata.is_active"
                class="sr-only peer"
                required
              />
              <div
                class="w-11 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-[#702F61] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-[#702F61]"
              ></div>
              <span
                class="ml-3 text-lg font-normal text-gray-900 dark:text-gray-300"
                >Active</span
              >
            </label>
          </div>
        </div>
        <div class="flex h-12 mt-10 justify-center">
          <button
            class="bg-[#702F61] text-white rounded-[24px] px-20 py-1.5 text-center font-bold"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

let userdata = ref({
  display_name: "",
  login_id: "",
  password: "",
  is_active: false,
  user_image:
    "https://robohash.org/officiisvoluptatemdoloremque.png?size=50x50&set=set1",
});
function handlesave(e) {
  e.preventDefault();
  e.target.formData;
  console.log("---", userdata);
}
</script>