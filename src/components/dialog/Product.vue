<template>
  <v-dialog
    v-model="isActive"
    persistent
    width="1024"
    transition="dialog-bottom-transition"
    scrollable
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
                  variant="solo"
                  v-bind="formData1.name"
                  :error-messages="errors.name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  variant="solo"
                  class="none-border-color"
                  label="Loại sản phẩm*"
                  :items="categories"
                  v-bind="formData1.category_id"
                  item-value="id"
                  v-model="selectedCategory"
                  item-title="name"
                  :error-messages="errors.category_id"
                >
                </v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Giá sản phẩm*"
                  variant="solo"
                  v-bind="formData1.price"
                  :error-messages="errors.price"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Chi tiết*"
                  variant="solo"
                  v-bind="formData1.description"
                  :error-messages="errors.description"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="d-flex">
                <v-row>
                  <v-col cols="6">
                    <v-file-input
                      v-bind="formData1.image"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Pick an avatar"
                      prepend-icon="mdi-camera"
                      label="Ảnh*"
                      @change="previewFilesImage($event)"
                      :error-messages="errors.image"
                    ></v-file-input>
                    <img :src="newImage || ''" width="100" height="100" />
                  </v-col>
                  <v-col cols="6">
                    <v-file-input
                      v-bind="formData1.qr_code"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Pick an avatar"
                      prepend-icon="mdi-camera"
                      label="Qr Code*"
                      @change="previewFilesQrCode($event)"
                      :error-messages="errors.qr_code"
                    ></v-file-input>
                    <img :src="newQrCode || ''" width="100" height="100" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" class="d-flex">
                <v-col cols="6">
                  <v-file-input
                    v-bind="formData1.images"
                    chips
                    multiple
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="Ảnh chi tiết*"
                    @change="previewFilesImages($event)"
                    :error-messages="errors.images"
                  ></v-file-input>
                  <img :src="newImages || ''" width="100" height="100" />
                </v-col>
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
import { useToast } from "vue-toastification";
import * as yup from "yup";

const newImage = ref("");
const newImages = ref("");
const newQrCode = ref("");
const image = ref("");
const qr_code = ref("");
const images = ref([]);
const selectedCategory = ref(null);
const toast = useToast();

//store
import { useApp } from "@/store/app";
import { useCategories } from "@/store/category";
const appStore = useApp();
const categoryStore = useCategories();
import { productStore } from "@/store/product";

const productsStore = productStore();
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

const { defineComponentBinds, handleSubmit, errors } = useForm();
const appendFormData = (formData, key, value) => {
  formData.append(key, value);
};

const formData1 = reactive({
  name: defineComponentBinds("name"),
  price: defineComponentBinds("price"),
  category_id: defineComponentBinds("category_id"),
  description: defineComponentBinds("description"),
  image: defineComponentBinds("image"),
  images: defineComponentBinds("images"),
  qr_code: defineComponentBinds("qr_code"),
});

const previewFilesImage = (event) => {
  const file = event.target.files[0];
  image.value = file;
  const theReader = new FileReader();
  theReader.onloadend = async () => {
    newImage.value = await theReader.result;
  };
  theReader.readAsDataURL(file);
};
const previewFilesQrCode = (event) => {
  const file = event.target.files[0];
  qr_code.value = file;
  const theReader = new FileReader();
  theReader.onloadend = async () => {
    newQrCode.value = await theReader.result;
  };
  theReader.readAsDataURL(file);
};
const previewFilesImages = (event) => {
  const files = event.target.files; // Sử dụng FileList thay vì chỉ lấy file đầu tiên
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const theReader = new FileReader();
    theReader.onloadend = async () => {
      newImages.value = await theReader.result;
    };
    theReader.readAsDataURL(file);
    images.value.push(file); // Thêm từng file vào mảng images
  }
};

const addProduct = handleSubmit(async () => {
  const formData = new FormData();

  appendFormData(formData, "name", formData1.name.modelValue);
  appendFormData(formData, "price", formData1.price.modelValue);
  appendFormData(formData, "category_id", formData1.category_id.modelValue);
  appendFormData(formData, "description", formData1.description.modelValue);
  appendFormData(formData, "inventory_id", 1);
  appendFormData(formData, "qr_code", qr_code.value);
  appendFormData(formData, "image", image.value);

  if (Array.isArray(images.value)) {
    images.value.forEach((image, index) => {
      appendFormData(formData, `images[${index}]`, image);
    });
  } else {
    console.error('images.value không phải là một mảng.');
  }

  const res = await productsStore.addProducts(formData);

  if (res.product) {
    toast.success("Tạo sản phẩm thành công");
    console.log('res', res);
    toggle();
  }
});
</script>
