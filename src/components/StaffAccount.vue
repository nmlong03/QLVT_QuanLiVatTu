<template>
  <v-data-table>
    <v-row justify="center" style="display: flex; flex-direction: row">
      <v-col cols="12" sm="6" md="8" lg="7">
        <v-card ref="form" variant="flat">
          <v-col lg="7" sm="6" class="mx-auto">
            <div flat width="112" class="pa-4">
              <div
                style="
                  text-align: center;
                  display: flex;
                  flex-direction: column;
                "
              >
                <label
                  for="dropzone-file"
                  style="margin: auto; margin-bottom: 5px"
                >
                  <div
                    style="
                      border: 1px solid;
                      border-radius: 50%;
                      height: 120px;
                      width: 120px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <v-icon icon="mdi-cloud-upload"></v-icon>
                  </div>
                  <input id="dropzone-file" type="file" style="display: none" />
                </label>
                <div
                  class="text-caption text-truncate text-ce"
                  style="color: rgb(87, 87, 244); text-align: center"
                >
                  Thay đổi ảnh đại diện
                </div>
              </div>
            </div>
          </v-col>
          <v-form @submit.prevent="submit">
            <v-card variant="flat">
              <v-row style="margin-top: 5px">
                <v-col>
                  <div
                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                  >
                    Họ
                  </div>
                  <v-text-field
                    v-model="firstName.value.value"
                    :error-messages="firstName.errorMessage.value"
                    color="primary"
                    placeholder="nguyen"
                    variant="outlined"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <div
                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                  >
                    Tên
                  </div>
                  <v-text-field
                    v-model="lastName.value.value"
                    :error-messages="lastName.errorMessage.value"
                    color="primary"
                    placeholder="minh"
                    variant="outlined"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div
                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                  >
                    Email
                  </div>
                  <v-text-field
                    v-model="email.value.value"
                    :error-messages="email.errorMessage.value"
                    color="primary"
                    placeholder="minhnn02@gmail.com"
                    variant="outlined"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <div
                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                  >
                    Số điện thoại
                  </div>
                  <v-text-field
                    v-model="phone.value.value"
                    :error-messages="phone.errorMessage.value"
                    color="primary"
                    placeholder="(+84 345999135)"
                    variant="outlined"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div
                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                  >
                    Mật khẩu đăng nhập
                  </div>
                  <v-text-field
                    v-model="password"
                    :append-inner-icon="
                      passwordShow ? 'mdi-eye-off' : 'mdi-eye'
                    "
                    :type="passwordShow ? 'text' : 'password'"
                    density="compact"
                    variant="outlined"
                    @click:append-inner="passwordShow = !passwordShow"
                    color="primary"
                  ></v-text-field>
                </v-col>

                <v-col>
                  <div
                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                  >
                    Xác nhận mật khẩu
                  </div>
                  <v-text-field
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                    :append-inner-icon="
                      passwordShow ? 'mdi-eye-off' : 'mdi-eye'
                    "
                    :type="passwordShow ? 'text' : 'password'"
                    density="compact"
                    variant="outlined"
                    @click:append-inner="passwordShow = !passwordShow"
                    color="primary"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>

            <v-col
              cols="12"
              sm="6"
              md="4"
              style="display: flex; flex-direction: row"
              class="ma-2 pa-2 me-auto"
            >
              <v-btn
                class="me-2 text-none"
                color="primary"
                variant="elevated"
                type="submit"
              >
                Lưu thay đổi
              </v-btn>
              <v-btn
                variant="outlined"
                class="text-none"
                color="primary"
                @click="handleReset"
              >
                Hủy bỏ
              </v-btn>
            </v-col>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-data-table>
</template>
<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    lastName(value) {
      if (value?.length >= 2) return true;

      return "Họ cần ít nhất 2 ký tự";
    },
    firstName(value) {
      if (value?.length >= 2) return true;

      return "Tên cần ít nhất 2 ký tự";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Số điện thoại cần ít nhất 9 số";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Phải là một địa chỉ email hợp lệ";
    },
    confirmPassword(value) {
      if (value === password.value) return true;
      return "Xác nhận mật khẩu không khớp.";
    },
  },
});
const firstName = useField("firstName");
const phone = useField("phone");
const email = useField("email");
const password = ref("");
const confirmPassword = ref("");
const passwordShow = ref(false);
const lastName = useField("lastName");
const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
const confirmPasswordRules = [
  () =>
    confirmPassword.value === password.value || "Xác nhận mật khẩu không khớp.",
];
</script>
