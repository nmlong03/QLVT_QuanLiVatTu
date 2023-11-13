<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h1>Made By Getters</h1>
    <div v-for="user in getUsers" :key="user.id">
      {{ user.name }}
    </div> -->
    <h1>Made By Actions</h1>
    <div v-for="product in products" :key="product.id">
     {{ product.name }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { productStore } from "@/store/product";
const store = productStore();
const products = computed(() => {
  return store.products;
});
onMounted(() => {
  store.fetchProducts();
});
// const getUsers = computed(() => {
//   return store.getUsers;
// });
</script>
