<template>
  <h1 class="ma-5">Danh Sách Khách Hàng</h1>

  <div class="d-flex align-center flex-column pa-6">
    <v-card width="90%">
      <v-table hover>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left">Tên</th>
            <th class="text-left">Tuổi</th>
            <th class="text-left">Email</th>
            <th class="text-left">Quê Quán</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td @click="console.log(item.image)">
              <v-avatar color="grey-darken-3" :image="item.image"></v-avatar>
            </td>
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">{{ item.age }}</td>
            <td class="text-left">{{ item.email }}</td>
            <td class="text-left">{{ item.country }}</td>
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
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
    name: "Long xing gai",
    age: 20,
    email: "longxing@gmail.com",
    country: "My An - Ha Ba - Ha Nam",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",

    name: "Long xing gai",
    age: 20,
    email: "longxing@gmail.com",
    country: "Ha Nam",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",

    name: "Long xing gai",
    age: 20,
    email: "longxing@gmail.com",
    country: "Ha Nam",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",

    name: "Long xing gai",
    age: 20,
    email: "longxing@gmail.com",
    country: "Ha Nam",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",

    name: "Long xing gai",
    age: 20,
    email: "longxing@gmail.com",
    country: "Ha Nam",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",

    name: "Long xing gai",
    age: 20,
    email: "longxing@gmail.com",
    country: "Ha Nam",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",

    name: "Long xing gai",
    age: 20,
    email: "longxing@gmail.com",
    country: "Ha Nam",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",

    name: "Long xing gai",
    age: 20,
    email: "longxing@gmail.com",
    country: "Ha Nam",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",

    name: "Long xing gai",
    age: 20,
    email: "longxing@gmail.com",
    country: "Ha Nam",
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
