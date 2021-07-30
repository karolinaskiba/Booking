<template>
  <li>
    <span>{{ name }}</span>
    <v-btn :to="hotelDetailsLink" color="primary" icon="mdi-pencil" size="small" class="ma-2" />
  </li>
</template>
<script>
export default {
  props: ["id", "name", "address", "description"],
  computed: {
    hotelDetailsLink(){
      return this.$route.path + '/' + this.id
    }
  }
};
</script>
