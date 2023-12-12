<template>
  <v-file-input
    v-model="selectedFile"
    label="Chọn ảnh"
    accept="image/*"
    @change="previewFiles"
  ></v-file-input>
  <v-text-field
  v-model="nameValue"
  label="Name">

</v-text-field>

  <v-btn @click="uploadImage">Upload</v-btn>
</template>

<script setup>
import { ref } from 'vue';
import { productStore } from "@/store/product";

const productsStore = productStore();
const selectedFile = ref(null);
const nameValue = ref('');

const previewFiles = (event) => {
  selectedFile.value = event.target.files[0];
};

const uploadImage = async () => {
  const formData = new FormData();
  formData.append('image', selectedFile.value);
  formData.append('images[1]', selectedFile.value);
  formData.append('qr_code', selectedFile.value);
  formData.append('name', nameValue.value);
  formData.append('price', 1);
  formData.append('category_id', 1);
  formData.append('description', 'l');
  formData.append('inventory_id', 1);
  try {
    const response = await productsStore.addProducts(formData);
    
    console.log('Image uploaded:', response.data);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};
</script>
