<template>
  <div>
    <base-spinner v-if="isLoading"></base-spinner>
    <base-card>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and password (at least 6 charts long)
        </p>
        <div class="form-control">
          <button>Login</button>
        </div>
      </form>
    </base-card>
    <base-card v-show="!!error">{{ error }}</base-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      this.error = null;

      this.formIsValid = true;

      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.replace("/");
      } catch (err) {
        this.error = err.message || "Failed authenticate, try later";
      }
      this.isLoading = false;
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