<template>
  <q-page>
    <q-container class="q-pa-md">
      <q-card>
        <q-card-section>
          <h4 class="text-h6">Product Details</h4>
          <p>{{ product.name }} - ${{ product.price }}</p>
        </q-card-section>

        <q-card-section>
          <h4 class="text-h6">Quantity</h4>
          <q-input v-model="quantity" type="number" :min="1" />
        </q-card-section>

        <q-card-section>
          <q-btn @click="addToCart" color="primary" label="Add to Cart" />
        </q-card-section>
      </q-card>
    </q-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: 'Sample Product',
        price: 19.99,
      },
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', { product: this.product, quantity: this.quantity });
      this.$router.push('/cart'); // Redirect to the cart page
    },
  },
};
</script>
