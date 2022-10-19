<template>
  <nav class="flex justify-between shadow py-3 lg:px-20 px-3 items-center mb-5">
    <div class="p-2 font-bold lg:text-2xl">Where in the world ?</div>
    <button
      class="flex items-center space-x-2 font-semibold lg:text-base text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="lg:w-5 lg:h-5 w-3 h-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>

      <span> Dark Mode </span>
    </button>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style></style>
