Robert Joseph Aguba
<template>
  <q-form @submit.prevent="login">
    <q-input v-model="email" label="Username" :dense="dense" />
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
import { Notify } from "quasar"; // Import the Notify component

export default {
  data() {
    return {
      username: "",
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
        const response = await api.post("api/login", {
         username: this.username,
          password: this.password,
        });

        console.log(response.data);
        if (response.data.msg === "error") {
          this.errorMsg = "Invalid email or password";
        } else {
          // Assuming your token is available in response.data.token
          const token = response.data.token;
          const role = response.data.role;
          console.log(response.data);

          // Store the token in session storage
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("role", role);

          // Redirect to the dashboard
          if (role === "admin") {
            this.$router.push("/");
          } else if (user_role === "cashier") {
            this.$router.push("/POS");
          }

          // Display a success notification
          Notify.create({
            message: "Login successful!",
            color: "teal",
            position: "bottom",
            timeout: 3000, // Adjust timeout as needed
          });
        }
      } catch (error) {
        console.error("Error during login:", error);

        // Display an error notification
        Notify.create({
          message: "Error during login. Please try again.",
          color: "negative",
          position: "bottom",
          timeout: 3000, // Adjust timeout as needed
        });

        // Handle other errors if needed
      }
    },
  },
};
</script>
