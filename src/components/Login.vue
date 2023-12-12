<template>
  <div style="height: 100vh; padding-top: 5%">
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      "
    >
      <v-img
        style="flex: none"
        width="50"
        height="50"
        src="../assets/logo.png"
      ></v-img>
      <v-card-text style="flex: none; font-size: 25px; font-weight: bold">
        Materials Management
      </v-card-text>
    </div>
    <v-card
      class="mx-auto pa-12 pb-8 mt-6"
      elevation="3"
      max-width="460"
      rounded="lg"
    >
      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Email
      </div>
      <v-text-field
        v-bind="formData.email"
        density="compact"
        placeholder="Nhập email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        :error-messages="errors.email"
        @keyup.enter="login"
      >
      </v-text-field>
      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Mật khẩu
      </div>
      <div>
        <v-text-field
          v-bind="formData.password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Nhập mật khẩu"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          :error-messages="errors.password"
          @keyup.enter="login"
        >
        </v-text-field>
        <div style="display: flex; justify-content: right">
          <router-link
            to=""
            style="text-align: start"
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Quên mật khẩu ?
          </router-link>
        </div>
      </div>

      <v-btn
        class="mt-4"
        width="100%"
        color="blue"
        size="large"
        variant="tonal"
        @click="login"
        @keyup.enter="login"
        tabindex="0"
      >
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="blue"
        ></v-progress-circular>
        <span v-if="!loading">Đăng nhập</span>
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useForm } from "vee-validate";
import { useToast } from "vue-toastification";
import router from "@/router";
import * as yup from "yup";

const toast = useToast();
const visible = ref(false);
const loading = ref(false);

import { userStore } from "@/store/user";
const store = userStore();

const { values, errors, defineComponentBinds, handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup
      .string()
      .trim()
      .required("Email là bắt buộc")
      .email("Email không hợp lệ"),
    password: yup
      .string()
      .trim()
      .required("Mật khẩu không được để trống"),
  }),
});
const formData = reactive({
  email: defineComponentBinds("email"),
  password: defineComponentBinds("password"),
});
const login = handleSubmit(async () => {
  loading.value = true;
  const payload = { ...values };
  const res = await store.login(payload);
  if (res.success == true) {
    toast.success("Login successfully");
    router.push("/admin");
  }
  if (res.response.data.success == false) {
    toast.error(res.response.data.message);
  }
  loading.value = false;
});
</script>
