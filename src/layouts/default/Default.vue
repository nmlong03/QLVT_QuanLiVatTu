<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      color="#232D3F"
      class="px-0"
      permanent
      :rail="rail"
      ><v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Administrator"
      ></v-list-item>
      <v-divider></v-divider>
      <v-list nav class="text-start">
        <router-link to="/list-categories">
          <v-list-item
            prepend-icon="mdi-archive"
          >
          <router-link to="/admin/list-categories">
            <v-list-item-title style="margin-left: 10px; font-weight: bold"
              >Loại vật tư</v-list-item-title
            >
          </router-link>
          </v-list-item>
        </router-link>
        <v-list-group v-for="(item, index) of menu_vertical" :key="index">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <v-list style="display: flex; align-items: center">
                <v-icon :icon="item.icon"></v-icon>
                <v-list-item-title style="margin-left: 40px; font-weight: bold">
                  {{ item.dropText }}
                </v-list-item-title>
              </v-list>
            </v-list-item>
          </template>
          <v-list v-if="item.children">
            <v-list v-for="(i, index) of item.children" :key="index">
              <router-link :to="i.path">
                <v-list-item
                  @click="console.log('clicked')"
                  style="font-size: 12px"
                  >{{ i.title }}</v-list-item
                >
              </router-link>
            </v-list>
          </v-list>
        </v-list-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-0">
          <v-list-item
            prepend-icon="mdi-logout"
            @click="console.log('clicked')"
          >
            <v-list-item-title style="margin-right: 40px"
              >Đăng Xuất</v-list-item-title
            >
          </v-list-item>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar color="blue" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <template v-slot:append>
        <v-btn icon="mdi-bell"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
import { menu_vertical } from "@/navigation/vertical";

const drawer = ref(true);
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
