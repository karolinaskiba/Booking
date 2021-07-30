<template>
  <base-card>
    <h2>{{ selectedHotel.name }}</h2>
    <h5>{{ selectedHotel.address }}</h5>
    <p>{{ selectedHotel.description }}</p>
    <v-btn>Rooms</v-btn>
  </base-card>
</template>
<script>
export default {
  data() {
    return { selectedHotel: null };
  },
  props: ["id"],
  created() {
    this.selectedHotel = this.$store.getters["hotels/hotels"].find(
      (hotel) => hotel.id === this.id
    );
    console.log(this.id);
  },
};
</script>
