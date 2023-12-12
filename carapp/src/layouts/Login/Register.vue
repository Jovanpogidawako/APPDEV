<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section class="q-mb-md">
        <div class="text-h6">Register</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="register">
          <q-input v-model="username" label="Username" />
          <q-input v-model="password" label="Password" type="password" />
          <q-btn
            color="primary"
            label="Register"
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
import {api} from 'src/boot/axios.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    async register() {
      try {
        this.loading = true;

        const response = await api.post('api/register/', {
          username: this.username,
          password: this.password,
        });

        if (response.data.success) {
          // Handle successful registration, redirect, etc.
          Notify.create({
            message: 'Registration successful!',
            color: 'teal',
          });
        } else {
          Notify.create({
            message: response.data.error || 'Registration failed. Please try again.',
            color: 'negative',
          });
        }
      } catch (error) {
        console.error('Error during registration:', error);
        Notify.create({
          message: 'Error during registration. Please try again.',
          color: 'negative',
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
