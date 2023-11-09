<template>
  <div style="height: 100vh; padding-top: 5%">
    <v-snackbar v-model="snackbar" color="red">
      Đăng nhập thành công
    </v-snackbar>
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
    <v-form @submit.prevent="sunmitHandler" ref="form">
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
          v-model="email"
          :rules="emailRules"
        >
        </v-text-field>
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Mật khẩu
        </div>
        <div>
          <v-text-field
            :append-inner-icon="passwordShow ? 'mdi-eye-off' : 'mdi-eye'"
            :type="passwordShow ? 'text' : 'password'"
            density="compact"
            placeholder="Nhập mật khẩu"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="passwordShow = !passwordShow"
            v-model="password"
            :rules="passwordRules"
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
          type="submit"
          :loading="loading"
        >
          Đăng nhập
        </v-btn>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    loading: false,
    snackbar: false,
    passwordShow: false,
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Mật khẩu tối thiểu 6 chữ số",
    ],
  }),
  methods: {
    sunmitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.snackbar = true;
        }, 4000);
      }
    },
  },
};
</script>
