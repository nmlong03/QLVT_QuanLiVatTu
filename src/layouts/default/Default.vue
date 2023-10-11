<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-menu v-for="(item, index) in MENU_NAVIGATION" :key="index" :location="location">
            <template v-slot:activator="{ props }" >
              <v-row style="display: block; width: 100%; margin: 5px 0 ;">
                <v-btn color="primary" style="width: 100%;" dark v-bind="props"> {{ item.dropText }} </v-btn>

              </v-row>
            </template>

            <v-list>
              <v-list-item
                v-for="(i, index) in item.children"
                :key="index"
              >
                <v-list-item-title>{{ i.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { MENU_NAVIGATION } from "@/navigation/vertical";
const drawer = ref(true);
const rail = ref(true);
</script>
