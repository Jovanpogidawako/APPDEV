<template>
  <div class="column items-end justify-end" style="position: fixed; bottom: 20px; right: 20px;">
    <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
      <q-fab-action color="primary" @click="goToInbox" icon="mail" />
    </q-fab>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      goToInbox() {
        this.$router.push('/mess')
      },
    };
  },
};
</script>
