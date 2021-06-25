<template>
  <v-app>
    <div class="ma-12 pa-12">
      <v-btn class="mr-2" color="primary">Primary</v-btn>

      <v-btn class="mr-2" color="secondary">Secondary</v-btn>

      <v-btn class="mr-2" color="success">Success</v-btn>

      <v-btn class="mr-2" color="error">Error</v-btn>

      <v-btn class="mr-2" color="warning">Warning</v-btn>

      <v-btn class="mr-2" color="info">Info</v-btn>

      <v-btn class="mr-2">Light</v-btn>

      <v-theme-provider theme="dark">
        <v-btn class="mr-2">Dark</v-btn>
      </v-theme-provider>
    </div>

    <div class="ma-12 pa-12">
      <v-btn variant="outlined" class="mr-2" color="primary">Primary</v-btn>

      <v-btn variant="outlined" class="mr-2" color="secondary">Secondary</v-btn>

      <v-btn variant="outlined" class="mr-2" color="success">Success</v-btn>

      <v-btn variant="outlined" class="mr-2" color="error">Error</v-btn>

      <v-btn variant="outlined" class="mr-2" color="warning">Warning</v-btn>

      <v-btn variant="outlined" class="mr-2" color="info">Info</v-btn>

      <v-btn variant="outlined" class="mr-2">Light</v-btn>

      <v-theme-provider theme="dark">
        <v-btn variant="outlined" class="mr-2">Dark</v-btn>
      </v-theme-provider>
    </div>
  </v-app>
</template>

<script>
  import '../styles/overwrite.sass'

  export default {

  }
</script>
