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
        Thêm loại sản phẩm
      </v-btn>
      <dialogCategories />
    </div>
    <div style="margin-right: 50px;">
      <h1 class="ma-5 text-center">Danh sách loại vật tư</h1>
      <v-data-table
        v-model:page="page"
        :headers="headers"
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
        <template #[`item.actions`]>
          <div class="gap">
            <v-btn
              icon="mdi-book-edit"
              color="primary"
              size="small"
              class="mx-2"
            ></v-btn>
            <v-btn icon="mdi-delete" color="error" size="small" @click="confirmDelete"></v-btn>
          </div>
        </template>

        <template v-slot:bottom>
          <div class="text-center pt-2" style="margin-right: 50px">
            <v-pagination v-model="page" :length="desserts.length/5"></v-pagination>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup>
// import { ref, computed, onMounted } from "vue";
import { ref } from "vue";
import dialogCategories from "@/components/dialog/Category.vue";
// import { productStore } from "@/store/product";

//store
import { useApp } from "@/store/app";
const appStore = useApp();
const toggleSix = () => {
  appStore.isToggle();
};


// const store = productStore();
// const desserts = computed(() => {
//   return store.products;
// });
// onMounted(() => {
//   store.fetchProducts();
// });

const desserts = [
  {name: "long", image: 'ddd'}
]
const confirmDelete = () => {
  const res = confirm("đlee");
  console.log(res);
}
//
const page = ref(1);
const headers = [
  { title: "STT", key: "id", sortable: false, searchable: true },
  { title: "Ảnh", key: "image", sortable: false },
  { title: "Tên loại sản phẩm", key: "name", sortable: false, searchable: true },
  { title: "", key: "actions" },
];
const search = ref("");

</script>
<style lang="scss">
.none-border-color .v-field--variant-filled .v-field__overlay {
  opacity: 0.1;
}
.v-table__wrapper table tbody tr.text-left td.text-lo {
  width: 400px !important;
}
</style>
