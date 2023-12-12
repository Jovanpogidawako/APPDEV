<template>
  <q-page>
    <q-container>
      <q-form @submit.prevent="register">
        <q-input
          v-model="username"
          label="Username"
          outlined
          dense
        ></q-input>

        <q-input
          v-model="email"
          label="Email"
          type="email"
          outlined
          dense
        ></q-input>

        <q-input
          v-model="password"
          label="Password"
          type="password"
          outlined
          dense
        ></q-input>

        <q-btn
          type="submit"
          label="Register"
          color="primary"
          class="q-mt-md"
        ></q-btn>
      </q-form>
    </q-container>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      try {
        // Send registration request to the backend (CI4 API)
        const response = await this.ap.post('http://your-ci4-api/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        // Handle the response accordingly (e.g., show success message, navigate to login)
        console.log(response.data);
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle registration error (e.g., show an error message)
      }
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
