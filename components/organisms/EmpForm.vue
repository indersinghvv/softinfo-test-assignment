import import { UnwrapRef from 'vue';
<template>
  <div
    class="w-full md:w-1/2 rounded-[29px] bg-white border border-[#e1e1e1] dark:border-[#100d14] dark:bg-[#100d14]"
    style="box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.08)"
  >
    <div class="m-12">
      <!-- form heading -->
      <div class="flex justify-between">
        <div>
          <p
            class="text-2xl font-bold text-left text-[#4a4a4a] dark:text-white"
          >
            Employee Info
          </p>
        </div>
        <div
          v-show="userdata?.editable"
          class="flex items-center cursor-pointer"
          @click="handleEditButton"
        >
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
            class="w-[49px] text-[22px] font-bold text-center text-[#42403a] pl-2 dark:text-white"
          >
            EDIT
          </p>
        </div>
      </div>
      <form @submit="handlesave">
        <div class="mt-10">
          <input
            v-model="userdata.display_name"
            class="h-16 rounded-lg border border-[#e9e9e9] block p-2.5 w-full dark:bg-[#100d14] dark:placeholder-white dark:text-white"
            placeholder="Display Name"
            required
            :disabled="canEdit"
          />
        </div>
        <div class="pt-3">
          <input
            v-model="userdata.login_id"
            class="h-16 rounded-lg border border-[#e9e9e9] block p-2.5 w-full dark:bg-[#100d14] dark:placeholder-white dark:text-white"
            placeholder="Login Id"
            required
            :disabled="canEdit"
          />
        </div>
        <div class="pt-3">
          <input
            type="password"
            v-model="userdata.password"
            class="h-16 rounded-lg border border-[#e9e9e9] block p-2.5 w-full dark:bg-[#100d14] dark:placeholder-white dark:text-white"
            placeholder="Password"
            required
            :disabled="canEdit"
          />
        </div>
        <div class="flex justify-between mt-3">
          <div>
            <p
              class="text-xl font-bold text-left text-[#4a4a4a] dark:text-white"
            >
              Status
            </p>
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
                :disabled="canEdit"
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
            :disabled="canEdit"
          >
            {{ userdata?.editable ? "Edit" : "Save" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const store = useUserStore();
const userdata = computed(() => store.initialUserFormData);
const canEdit = ref(false);
async function handlesave(e) {
  e.preventDefault();
  if (userdata?.value.editable) {
    await store.updateUser(userdata);
  } else {
    await store.addUser(userdata);
  }
  await store.resetUserForm();
  canEdit.value = false;
}
watch(userdata, () => {
  canEdit.value = true;
});
function handleEditButton() {
  canEdit.value = !canEdit.value;
}
</script>