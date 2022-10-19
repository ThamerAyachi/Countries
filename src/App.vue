<template>
  <div>
    <header>
      <nav-bar />
    </header>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>
