<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section class="q-mb-md">
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="login">
          <q-input v-model="username" label="Username" />
          <q-input v-model="password" label="Password" type="password" />
          <q-btn
            color="primary"
            label="Login"
            class="q-mt-md"
            :loading="loading"
            :disable="loading"
            type="submit"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { Notify } from 'quasar';
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    async login() {
      try {
        this.loading = true;

        const response = await axios.post('http://backapp.test/api/login', {
          username: this.username,
          password: this.password,
        });

        if (response.data.message === 'Login successful') {
          // Handle successful login, redirect, etc.
          Notify.create({
            message: 'Login successful!',
            color: 'teal',
          });
        } else {
          Notify.create({
            message: 'Invalid credentials',
            color: 'negative',
          });
        }
      } catch (error) {
        console.error('Error during login:', error);
        Notify.create({
          message: 'Error during login. Please try again.',
          color: 'negative',
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
