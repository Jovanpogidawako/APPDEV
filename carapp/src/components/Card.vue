<template>
  <q-page class="q-pa-md">

    <div class="full-width column wrap justify-start items-start content-center jvn" >
      <q-card>
          <q-card-section class="q-pa-md">
            <q-item>
              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label >sdfsdf</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card><q-card>
          <q-card-section class="q-pa-md">
            <q-item>
              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label >sdfsdf</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card><q-card>
          <q-card-section class="q-pa-md">
            <q-item>
              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label >sdfsdf</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card><q-card>
          <q-card-section class="q-pa-md">
            <q-item>
              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label >sdfsdf</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>

  </q-page>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      cards: [
        { id: 1, title: 'Card 1', subtitle: 'Subtitle 1', cols: 6, rows: 6 },
        { id: 2, title: 'Card 2', subtitle: 'Subtitle 2', cols: 6, rows: 3},
        // Add more cards as needed
      ],
    };
  },
};
</script>
<style>
.jvn>*{
  background-color: green;
}
</style>
