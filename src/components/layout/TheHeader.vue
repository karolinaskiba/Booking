<template>
  <header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!isLoggedIn" to="/auth">Auth</router-link> |
      <router-link to="/hotel-list">Hotel List</router-link> |
      <button @click="logout" v-if="isLoggedIn">Logout</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
