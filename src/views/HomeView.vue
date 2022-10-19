<template>
  <div class="home">
    <div class="lg:mx-52 mx-5 my-10">
      <!-- inputs -->
      <div class="lg:flex justify-between items-center">
        <!-- search input -->
        <div
          class="bg-white flex items-center px-6 py-3 rounded shadow space-x-3 font-semibold text-dg my-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="search"
            placeholder="Search for a country..."
            class="lg:pr-28"
          />
        </div>

        <div>
          <select>
            <option value="">option 1</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
