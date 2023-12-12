<template>
  <div class="q-pa-md">
    <q-btn-dropdown icon="settings">
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

          <!-- View Profile Button -->
          <q-btn
            color="primary"
            label="View Profile"
            push
            size="sm"
            @click="viewProfile"
            v-close-popup
          />

          <!-- Add Space -->
          <div class="q-mb-md"></div>

          <q-btn
            color="primary"
            label="Logout"
            push
            size="sm"
            @click="logout"
            v-close-popup
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const mobileData = ref(false)
    const bluetooth = ref(false)

    const logout = () => {
      // Perform any logout actions (clear session, etc.)
      // Navigate to the login page
      router.push('/log'); // Replace '/login' with your login route path
    }

    const viewProfile = () => {
      // Navigate to the profile page
      router.push('/prof'); // Replace '/profile' with your profile route path
    }

    return {
      mobileData,
      bluetooth,
      logout,
      viewProfile
    }
  }
}
</script>
<style>

</style>
