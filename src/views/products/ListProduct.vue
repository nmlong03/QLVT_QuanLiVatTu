<template>
  <div class="w-100">
    <div
      style="
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        margin-left: 50px;
        margin-right: 50px;
      "
    >
      <div style="width: 300px">
        <v-text-field
          filled
          dense
          variant="solo"
          class="none-border-color"
          v-model="search"
          placeholder="Search"
          hide-details="false"
          append-inner-icon="mdi mdi-magnify"
        ></v-text-field>
      </div>

      <div style="width: 300px">
        <v-select
          clearable
          hide-details="false"
          variant="solo"
          class="none-border-color"
          label="Tìm kiếm theo giá"
          :items="['Từ lớn đến bé', 'Từ bé đến lớn']"
        ></v-select>
      </div>
      <v-btn
        color="primary"
        height="3.125rem"
        append-icon="mdi-plus"
        @click="toggleSix"
      >
        Thêm sản phẩm
      </v-btn>
      <dialogProduct />
    </div>
    <!-- content -->
    <div style="margin-right: 50px">
      <h1 class="ma-5 text-center">Danh sách vật tư</h1>
      <v-data-table
        v-model:page="page"
        :headers="horizontal"
        :items="desserts"
        :items-per-page="5"
        :search="search"
        hide-default-footer
        style="text-align: left; margin-left: 50px; margin-right: 50px"
      >
        <template v-slot:header> </template>
        <template #[`item.image`]="{ item }">
          <div>
            <v-img :src="item.image" width="60"></v-img>
          </div>
        </template>
        <template #[`item.images`]="{ item }">
          <div v-for="image in item.images" :key="image.image_path">
            <v-img :src="image.image_path" width="60"></v-img>
          </div>
        </template>
        <template #[`item.qr_code`]="{ item }">
          <div>
            <v-img :src="item.qr_code" width="60"></v-img>
          </div>
        </template>
        <template #[`item.actions`]="{ item }">
          <div class="gap">
            <v-btn
              icon="mdi-book-edit"
              color="primary"
              size="small"
              class="mx-2"
            ></v-btn>
            <v-btn
              icon="mdi-delete"
              color="error"
              size="small"
              @click="handleDelete(item.id)"
            ></v-btn>
          </div>
        </template>

        <template v-slot:bottom>
          <div class="text-center pt-2" style="margin-right: 50px">
            <v-pagination
              v-model="page"
              :length="paginationLength"
            ></v-pagination>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import dialogProduct from "@/components/dialog/Product.vue";
import { horizontal } from "@/views/products/horizontal";
import { useToast } from "vue-toastification";

const toast = useToast();

//store
import { useApp } from "@/store/app";
import { productStore } from "@/store/product";

const appStore = useApp();
const toggleSix = () => {
  appStore.isToggle();
};

const store = productStore();
const desserts = computed(() => {
  return store.products;
});
const paginationLength = ref(0);
console.log("g", paginationLength.value);
watch(desserts, (newDesserts, oldDesserts) => {
  paginationLength.value = Math.ceil(newDesserts.length / 5);
});
onMounted(() => {
  store.fetchProducts();
});

const handleDelete = async (id) => {
  await store
    .deleteProduct(id)
    .then(() => toast.success("Xóa sản phẩm thành công"));
};

//
const page = ref(1);

const search = ref("");

//
// const filteredDesserts = computed(() => {
//   const keyword = search.value.toLowerCase();
//   if (keyword) {
//     return desserts.value.filter((dessert) => {
//       for (const header of headers) {
//             if (header.searchable && String(dessert[header.key]).toLowerCase().includes(keyword)) {
//               return true;
//             }
//           }
//       return false;
//     });
//   }
//   return desserts;
// });
</script>
<style lang="scss">
.none-border-color .v-field--variant-filled .v-field__overlay {
  opacity: 0.1;
}
.v-table__wrapper table tbody tr.text-left td.text-lo {
  width: 400px !important;
}
</style>
