<template>
  <v-dialog
    v-model="isActive"
    persistent
    width="1024"
    transition="dialog-bottom-transition"
  >
    <v-form>
      <v-card>
        <v-card-title>
          <span class="text-h5">Thêm sản phẩm</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Tên sản phẩm*"
                  required
                  variant="solo"
                  v-bind="formData.name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  clearable
                  required
                  variant="solo"
                  class="none-border-color"
                  label="Loại sản phẩm*"
                  :items="categories"
                  v-bind="formData.category_id"
                  item-value="id"
                  v-model="selectedCategory"
                >
                </v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Giá sản phẩm*"
                  required
                  variant="solo"
                  v-bind="formData.price"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="d-flex">
                <v-row>
                  <v-col cols="6">
                    <v-file-input
                      v-bind="formData.image"
                      chips
                      multiple
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Pick an avatar"
                      prepend-icon="mdi-camera"
                      label="Ảnh*"
                      @change="previewFiles($event)"
                    ></v-file-input>
                    <img :src="newImage || ''" width="100" height="100" />
                  </v-col>
                  <v-col cols="6">
                    <v-file-input
                      :rules="rules"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Pick an avatar"
                      prepend-icon="mdi-camera"
                      label="Qr Code*"
                      @change="previewFiles($event)"
                    ></v-file-input>
                    <img :src="newImage || ''" width="100" height="100" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
          <small class="text-red">*Các trường có sao là bắt buộc</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="toggle">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="addProduct">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script setup>
import { ref, computed, onMounted, reactive } from "vue";
import { useForm } from "vee-validate";
const selectedCategory = ref(null);
//store
import { useApp } from "@/store/app";
import { useCategories } from "@/store/category";
const appStore = useApp();
const categoryStore = useCategories();
const { values, defineComponentBinds, handleSubmit } = useForm();

const formData = reactive({
  name: defineComponentBinds("name"),
  price: defineComponentBinds("price"),
  category_id: defineComponentBinds("category_id"),
  image: defineComponentBinds("image"),
});

const addProduct = handleSubmit(async () => {
  const payload = { ...values };
  console.log(payload);
});

const isActive = computed(() => appStore.getToggle);
const toggle = () => {
  appStore.isToggle();
};
const categories = computed(() => {
  return categoryStore.getCategories.map((category) => ({
    id: category.id,
    name: category.name,
  }));
});

onMounted(() => {
  categoryStore.fetchCategories();
});

//
const newImage = ref("");

const previewFiles = (event) => {
  const file = event.target.files[0];

  const theReader = new FileReader();
  theReader.onloadend = async () => {
    newImage.value = await theReader.result;
  };
  theReader.readAsDataURL(file);
};
</script>
