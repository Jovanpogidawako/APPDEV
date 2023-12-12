<template>
  <q-form @submit.prevent="login">
    <q-input v-model="email" label="Email" :dense="dense" />
    <q-input v-model="password" label="Password" :dense="dense" />
    <q-btn
      unelevated
      rounded
      color="primary"
      label="Login"
      class="full-width q-ma-lg"
      outline
      type="submit"
    />
  </q-form>

</template>
<script>
import { api } from "src/boot/axios";
import { Notify } from "quasar";

export default {
  data() {
    return {
      email: "", // Changed from 'username'
      password: "",
      errorMsg: "",
    };
  },
  methods: {
    async login() {
      // Client-side check for empty password
      if (this.password.trim() === "") {
        this.errorMsg = "Password cannot be empty";
        return;
      }

      try {
        const response = await api.post('/api/login', {
          email: this.email,
          password: this.password,
        });

        console.log(response.data);
        if (response.data.error) {
          this.errorMsg = "Invalid email or password";
        } else {
          const token = response.data.token;
          const role = response.data.role;

          sessionStorage.setItem("token", token);
          sessionStorage.setItem("role", role);

          if (role === "") {
            this.$router.push("/home");
          } else if (role === "cashier") {
            this.$router.push("/layouts");
          }

          Notify.create({
            message: "Login successful!",
            color: "teal",
            position: "bottom",
            timeout: 3000,
          });
        }
      } catch (error) {
        console.error("Error during login:", error);

        Notify.create({
          message: "Error during login. Please try again.",
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
      }
    },
  },
};
</script>
