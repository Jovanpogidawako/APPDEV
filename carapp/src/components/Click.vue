<template>
  <div class="column items-end justify-end" style="position: fixed; bottom: 20px; right: 20px;">
    <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
      <q-fab-action color="primary" @click="onClick" icon="mail" />
      <q-fab-action color="secondary" @click="onClick" icon="alarm" />
    </q-fab>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      onClick() {
        // console.log('Clicked on a fab action')
      },
    };
  },
};
</script>
