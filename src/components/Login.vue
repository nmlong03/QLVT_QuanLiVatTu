<template>
  <div style="height: 100vh; padding-top: 5%;">
<div style="display: flex;flex-direction:row; justify-content: center; align-items: center;">
  <v-img style="flex: none; " width="50" height="50" src="../assets/logo.png"></v-img>
      <v-card-text style="flex: none; font-size: 25px; font-weight: bold;">
        Materials
        Management
      </v-card-text>
</div>


    <v-card class="mx-auto pa-12 pb-8 mt-6" elevation="3" max-width="460" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
        variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
          Forgot login password?</a>
      </div>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
        @click:append-inner="visible = !visible"></v-text-field>

      <!-- <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card> -->
<router-link to="/admin">
      <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
        Log In
      </v-btn>
    </router-link>
      <!-- <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
        Forgot password <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text> -->
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    visible: false,
  }),
}
</script>
