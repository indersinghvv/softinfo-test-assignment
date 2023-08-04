import { OrganismsHeader, OrganismsEmpForm, OrganismsEmpList } from '../.nuxt/components';
<template>
  <div class="flex flex-wrap bg-[#F2F1FA]">
    <div
      class="flex flex-col items-center w-1/12 rounded-tr-[25px] rounded-br-[25px] bg-[#702f61] justify-center overflow-auto"
    >
      <OrganismsAppSidebar />
    </div>
    <!-- main content -->
    <div class="w-11/12 flex flex-col p-2 md:p-4">
      <!-- header -->
      <OrganismsHeader />
      <div class="flex flex-col md:flex-row justify-between gap-8 pt-10">
        <OrganismsEmpForm />
        <OrganismsEmpList />
      </div>
    </div>
  </div>
</template>
