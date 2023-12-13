<template>
  <q-page class="q-pa-sm bg-white">
    <div class="row q-col-gutter-sm">
      <!-- Product List -->
      <div class="col-md-8">
        <h2 class="text-h5">Product List</h2>
        <q-list>
          <q-item
            v-for="(product, index) in products"
            :key="index"
            clickable
            @click="addToCart(product)"
          >
            <q-item-section>
              <q-item-label>{{ product.name }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>${{ product.price.toFixed(2) }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <!-- Shopping Cart -->
      <div class="col-md-4">
        <h2 class="text-h5">Shopping Cart</h2>
        <q-list>
          <q-item
            v-for="(item, index) in cart"
            :key="index"
          >
            <q-item-section>
              <q-item-label>{{ item.name }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>${{ item.price.toFixed(2) }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-item>
          <q-item-section>
            <q-item-label>Total:</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>${{ calculateTotal().toFixed(2) }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-btn label="Checkout" color="primary" @click="checkout" class="q-mt-md" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Product A", price: 10.99 },
        { id: 2, name: "Product B", price: 19.99 },
        { id: 3, name: "Product C", price: 78.99 },
        { id: 4, name: "Product D", price: 178.99 },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      // Check if the product is already in the cart
      const existingItem = this.cart.find(item => item.id === product.id);

      if (existingItem) {
        // Increment the quantity if the item is already in the cart
        existingItem.quantity += 1;
      } else {
        // Add the product to the cart with a quantity of 1
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    calculateTotal() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    checkout() {
      // Perform checkout logic here (e.g., navigate to a checkout page)
      console.log("Checkout clicked!");
    },
  },
};
</script>

<style scoped>
/* Add your custom styles as needed */
</style>
