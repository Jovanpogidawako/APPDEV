<template>
  <div>
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
            <q-input v-model="newProduct.name" label="Product Name" />
            <q-input
              v-model="newProduct.price"
              label="Product Price"
              type="number"
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn label="Cancel" color="negative" @click="cancelAdd" />
            <q-btn label="Add" color="positive" @click="addProduct" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </div>
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
      this.newProduct = { name: '', price: 0 };
    },
    addProduct() {
      const newId = Math.max(...this.products.map((p) => p.id), 0) + 1;
      this.products.push({ id: newId, ...this.newProduct });
      this.cancelAdd();
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
