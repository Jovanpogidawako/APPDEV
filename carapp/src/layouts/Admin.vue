<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="data:image/jpeg;base64,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">
          </q-avatar>
        </q-toolbar-title>
        <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="primary" class="q-ml-sm q-px-md" />

<q-space />
<div class="facebook-search-container">
  <q-input
  class="facebook-search-bar"
  v-model="search"
  placeholder="Search"
  style="width: 500px"
>
  <template v-slot:prepend>
    <q-icon v-if="search === ''" name="search" style="color: rgb(118, 113, 113);" />
    <q-icon
      v-else
      name="clear"
      class="cursor-pointer"
      @click="search = ''"
      style="color: rgb(118, 113, 113);"
    />
  </template>
</q-input>

  </div>

  <q-space />
  <q-btn
    to="/mess"
    tag="router-link"
    round
    flat
    icon="message"
  />
<div class="q-gutter-sm row items-center no-wrap">
  <q-btn round dense flat color="white-8" icon="notifications">
    <q-badge color="red" text-color="white" floating>
      2
    </q-badge>
    <q-tooltip>Notifications</q-tooltip>
  </q-btn>
  <Menu/>
  </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" bordered>
      <q-item clickable v-ripple @click="navigateTo('/charts')">
          <q-item-section avatar>
            <q-icon name="charts" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Charts</q-item-label>
          </q-item-section>
        </q-item>
      <q-list>
        <q-item clickable v-ripple @click="navigateTo('/sched')">
          <q-item-section avatar>
            <q-icon name="access_time" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Scheduling</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Menu from "src/components/Menu.vue"


export default {
  name:'Main',
  components:{
    Menu,

  },
  data(){
    return {
      menuOpened: false,
      menuOpen: false
    };
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    navigateTo(routes) {
      this.$router.push(routes);
      this.leftDrawerOpen = false; // Close the drawer after navigation
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

  },
  handleSelection(option) {
      // Perform actions based on the selected option
      console.log('Selected:', option);
      // You can perform actions here based on the selected option, such as navigation or other functionality
    }
  }
</script>
<style scoped>
.facebook-search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px; /* Adjust the height as needed */
}

.facebook-search-bar {
  width: 00px; /* Adjust the width as needed */
  background-color: #f0f2f5;
  border-radius: 25px;
  border: 1px solid #ddd;
  height: 55px;
}

.q-field__control {
  border: none;
}

.search-icon {
  color: #555;
}
</style>
