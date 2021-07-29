<template>
  <base-card>
    <h1>Add new Hotel</h1>
    <hotel-form @save-data="saveData"></hotel-form>
  </base-card>
</template>
<script>
import HotelForm from "./HotelForm.vue";
export default {
  components: {
    HotelForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("hotels/addHotelAction", data);
      this.$router.replace("/hotel-list");
    },
  },
};
</script>
