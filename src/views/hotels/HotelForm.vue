<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim="name" />
    </div>
    <div class="form-control">
      <label for="address">Address</label>
      <input type="text" id="address" v-model.trim="address" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea rows="5" id="description" v-model.trim="description" />
    </div>
    <div class="form-control">
      <button>Save</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      name: "",
      address: "",
      description: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        address: this.address,
        description: this.description,
      };
      this.$emit("save-data", formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin: 1rem;
  padding: 1rem;
  &-control {
    margin: 1rem 0;
    text-align: left;
  }
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>