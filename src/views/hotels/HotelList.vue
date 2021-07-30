<template>
  <div>
    <h1>Hotels</h1>
    <router-link v-if="isLoggedIn" to="/hotel-new">
      <v-btn>Add</v-btn>
    </router-link>
    <ul>
      <hotel-item
        v-for="hotel in hotelsList"
        :key="hotel.id"
        :name="hotel.name"
        :id="hotel.id"
      >
      </hotel-item>
    </ul>
    <p v-if="!hasHotels">Any data to display</p>
  </div>
</template>

<script>
import HotelItem from "./HotelListItem.vue";
export default {
  components: { HotelItem },
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


