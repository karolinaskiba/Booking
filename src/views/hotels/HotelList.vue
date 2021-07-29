<template>
  <div>
    <h1>Hotels</h1>
    <router-link v-if="isLoggedIn" to="/hotel-new">
      <button>Add</button>
    </router-link>
    <ul>
      <li v-for="hotel in hotelsList" :key="hotel.id">
        {{ hotel.name }}
      </li>
    </ul>
    <p v-if="!hasHotels">Any data to display</p>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
    hotelsList() {
      return this.$store.getters["hotels/hotels"];
    },
    hasHotels() {
      return this.$store.getters["hotels/hasHotels"];
    },
  },

  methods: {
    loadHotels() {
      this.$store.dispatch("hotels/loadHotels");
    },
  },
  created() {
    this.loadHotels();
  },
};
</script>


