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
        density="compact"
        placeholder="Nhập email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      >
      </v-text-field>
      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Mật khẩu
      </div>
      <div>
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Nhập mật khẩu"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
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
      >
        Đăng nhập
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>
