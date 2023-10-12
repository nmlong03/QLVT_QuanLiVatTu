<template>
  <v-container>
    <v-layout>
      <v-card min-width="100%">
        <!-- sidebar  -->
        <v-navigation-drawer
          color="blue"
          class="px-0"
          permanent
          rail
          expand-on-hover
          ><v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="Administrator"
            nav
          ></v-list-item>
          <v-divider></v-divider>
          <v-list nav class="text-start">
            <v-list-item
              prepend-icon="mdi-home"
              @click="console.log('clicked')"
            >
              <v-list-item-title>List 1</v-list-item-title>
            </v-list-item>
            <v-list-group>
              <template v-slot:activator="{ props }">
                <v-list-item prepend-icon="mdi-home-city" v-bind="props">
                  <v-list-item-title>Test 1</v-list-item-title>
                </v-list-item>
              </template>
              <v-list-item @click="console.log('clicked')">test1</v-list-item>
              <v-list-item @click="console.log('clicked')">test2</v-list-item>
            </v-list-group>
            <v-list-group>
              <template v-slot:activator="{ props }">
                <v-list-item prepend-icon="mdi-account" v-bind="props">
                  <v-list-item-title>Test 2</v-list-item-title>
                </v-list-item>
              </template>
              <v-list-item @click="console.log('clicked')">test1</v-list-item>
              <v-list-item @click="console.log('clicked')">test2</v-list-item>
              <v-list-item @click="console.log('clicked')">test3</v-list-item>
            </v-list-group>
            <v-list-item
              prepend-icon="mdi-home"
              @click="console.log('clicked')"
            >
              <v-list-item-title>List 2</v-list-item-title>
            </v-list-item>
          </v-list>
          <template v-slot:append>
            <div class="pa-0">
              <v-list-item
                prepend-icon="mdi-home"
                @click="console.log('clicked')"
              >
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </div>
          </template>
        </v-navigation-drawer>
        <!-- navbar  -->
        <v-app-bar color="gray">
          <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
          <v-app-bar-title>Application</v-app-bar-title>
          <v-spacer></v-spacer>
          <v-icon class="mr-4">mdi-magnify</v-icon>
          <v-icon class="mr-4">mdi-heart</v-icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-app-bar>
      </v-card>

      <router-view />
    </v-layout>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const drawer = ref(false);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
