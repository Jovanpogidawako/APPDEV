<template>
  <q-page padding>
    <q-table
      :rows="products"
      :columns="columns"
      row-key="id"
      :rows-per-page-options="[5, 10, 15]"
      wrap-cells
    >
      <template v-slot:top-left="props">
        <q-btn @click="showAddDialog" icon="add" color="primary" />
      </template>

      <template v-slot:body-cell-name="props">
        {{ props.row.name }}
      </template>

      <template v-slot:body-cell-price="props">
        ${{ props.row.price.toFixed(2) }}
      </template>

      <template v-slot:body-cell-actions="props">
        <q-btn
          @click="deleteProduct(props.row.id)"
          icon="delete"
          color="negative"
        />
      </template>
    </q-table>

    <q-dialog v-model="addDialog" persistent>
      <q-card>
        <q-card-section>
          <q-form @submit="addProduct">
            <q-input
              v-model="newProduct.name"
              label="Product Name"
              outlined
              dense
            />
            <q-input
              v-model="newProduct.price"
              label="Product Price"
              type="number"
              outlined
              dense
            />
            <q-card-actions align="right">
              <q-btn label="Cancel" color="negative" @click="cancelAdd" />
              <q-btn type="submit" label="Add" color="positive" />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product A', price: 19.99 },
        { id: 2, name: 'Product B', price: 29.99 },
        // Add more products as needed
      ],
      columns: [
        { name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true },
        { name: 'price', label: 'Price', align: 'left', field: 'price', sortable: true },
        { name: 'actions', label: 'Actions', align: 'left', field: 'actions' },
      ],
      addDialog: false,
      newProduct: {
        name: '',
        price: 0,
      },
    };
  },
  methods: {
    showAddDialog() {
      this.addDialog = true;
    },
    cancelAdd() {
      this.addDialog = false;
      // Clear the newProduct data
      this.newProduct = { name: '', price: 0 };
    },
    addProduct() {
      // Check if both name and price are provided
      if (this.newProduct.name && this.newProduct.price) {
        const newId = Math.max(...this.products.map((p) => p.id), 0) + 1;
        this.products.push({ id: newId, ...this.newProduct });
        this.cancelAdd();
      } else {
        // Provide feedback or handle the case where the inputs are not valid
        console.error('Please provide both name and price for the new product.');
      }
    },
    deleteProduct(productId) {
      const index = this.products.findIndex((p) => p.id === productId);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
  },
};
</script>
