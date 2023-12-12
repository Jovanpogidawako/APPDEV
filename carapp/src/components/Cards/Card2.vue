<template>
  <div class="fit row inline wrap justify-start items-start content-start">
    <q-card v-for="(product, index) in products" :key="index" class="card">
      <q-img :src="product.image" :alt="product.title" class="card-img" />
      <q-card-section class="q-pa-md">
        <q-card-title class="text-h6">{{ product.title }}</q-card-title>
        <q-card-subtitle class="q-mb-md">{{ product.description }}</q-card-subtitle>
        <q-card-main>
          <q-item>
            <q-item-section>
              <q-item-label>
                <div class="text-h6 text-primary">{{ product.price }}</div>
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn   icon="shopping_cart" class="text-primary" @click="addToCart(product)" />
            </q-item-section>
          </q-item>
        </q-card-main>
      </q-card-section>
    </q-card>
    <q-card v-for="(product, index) in products" :key="index" class="card">
      <q-img :src="product.image" :alt="product.title" class="card-img" />
      <q-card-section class="q-pa-md">
        <q-card-title class="text-h6">{{ product.title }}</q-card-title>
        <q-card-subtitle class="q-mb-md">{{ product.description }}</q-card-subtitle>
        <q-card-main>
          <q-item>
            <q-item-section>
              <q-item-label>
                <div class="text-h6 text-primary">{{ product.price }}</div>
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn   icon="shopping_cart" class="text-primary" @click="addToCart(product)" />
            </q-item-section>
          </q-item>
        </q-card-main>
      </q-card-section>
    </q-card>
    <q-card v-for="(product, index) in products" :key="index" class="card">
      <q-img :src="product.image" :alt="product.title" class="card-img" />
      <q-card-section class="q-pa-md">
        <q-card-title class="text-h6">{{ product.title }}</q-card-title>
        <q-card-subtitle class="q-mb-md">{{ product.description }}</q-card-subtitle>
        <q-card-main>
          <q-item>
            <q-item-section>
              <q-item-label>
                <div class="text-h6 text-primary">{{ product.price }}</div>
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn   icon="shopping_cart" class="text-primary" @click="addToCart(product)" />
            </q-item-section>
          </q-item>
        </q-card-main>
      </q-card-section>
    </q-card>
    <q-card v-for="(product, index) in products" :key="index" class="card">
      <q-img :src="product.image" :alt="product.title" class="card-img" />
      <q-card-section class="q-pa-md">
        <q-card-title class="text-h6">{{ product.title }}</q-card-title>
        <q-card-subtitle class="q-mb-md">{{ product.description }}</q-card-subtitle>
        <q-card-main>
          <q-item>
            <q-item-section>
              <q-item-label>
                <div class="text-h6 text-primary">{{ product.price }}</div>
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn   icon="shopping_cart" class="text-primary" @click="addToCart(product)" />
            </q-item-section>
          </q-item>
        </q-card-main>
      </q-card-section>
    </q-card>
  </div>

</template>

<script>
export default {
  name:'Card2',
  data() {
    return {
      products: [
        {
          title: 'Product 1',
          description: 'Description for Product 1',
          price: '$19.99',
          image: 'path/to/product1.jpg',
        },
        // Add more products as needed
      ],
    };
  },
  methods: {
    addToCart(product) {
      // Implement your addToCart logic here
      console.log(`Added ${product.title} to the cart`);
      this.$router.push('/details')
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  margin: 10px;
}

.card-img {
  height: 150px;
  object-fit: cover;
}

.text-primary {
  color: #e44d26;
}
</style>
