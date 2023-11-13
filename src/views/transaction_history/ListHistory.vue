<template>
  <h1 class="ma-5">Danh Sách Lịch Sử Giao Dịch</h1>

  <div class="d-flex align-center flex-column pa-6">
    <v-card width="90%">
      <v-table hover>
        <thead>
          <tr>
            <th class="text-left">Mã</th>
            <th class="text-left">Ngày Tạo</th>
            <th class="text-left">Khách Hàng</th>
            <th class="text-left">Nhân Viên</th>
            <th class="text-left">Hợp Đồng</th>
            <th class="text-left">Tổng Tiền</th>
            <th class="text-left">Chi Tiết</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td class="text-left">{{ item.id }}</td>
            <td class="text-left">{{ item.datetime }}</td>
            <td class="text-left">{{ item.customer }}</td>
            <td class="text-left">{{ item.namesaff }}</td>
            <td class="text-left">{{ item.contract }}</td>
            <td class="text-left">{{ item.price }}</td>

            <td class="text-left">
              <v-btn style="">
                <v-icon>
                  {{ item.detail }}
                </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <v-pagination v-model="page" :length="pageCount"> </v-pagination>
  </div>
</template>

<script setup>
import { ref } from "vue";
const page = ref(1);
const pageCount = ref(8);
const desserts = ref([
  {
    id: "23422",
    datetime: "23:23 27/11/2023",
    customer: "Vanh Hoa Hoe",
    namesaff: "Long xing gai",
    contract: "Vật Tư",
    price: "3.000.000đ",
    detail: "mdi-eye",
  },
]);
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px;

  a {
    text-decoration: none;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
