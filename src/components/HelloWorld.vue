<template>
  <v-app>
    <v-main>
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
        <v-alert color="primary">
          A simple primary alert—check it out!
        </v-alert>
        <v-alert color="secondary">
          A simple secondary alert—check it out!
        </v-alert>
        <v-alert color="success">
          A simple success alert—check it out!
        </v-alert>
        <v-alert color="error">
          A simple error alert—check it out!
        </v-alert>
        <v-alert color="warning">
          A simple warning alert—check it out!
        </v-alert>
        <v-alert color="info">
          A simple info alert—check it out!
        </v-alert>
        <v-alert type="info">
          A simple info alert—check it out!
        </v-alert>
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

      <div class="ma-12 pa-12">
        <p class="text-h1">h1. Bootstrap heading</p>

        <p class=text-h2>h2. Bootstrap heading</p>

        <p class="text-h3">h3. Bootstrap heading</p>

        <p class="text-h4">h4. Bootstrap heading</p>

        <p class="text-h5">h5. Bootstrap heading</p>

        <p class="text-h6">h6. Bootstrap heading</p>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import '../styles/overwrite.sass'

  export default {

  }
</script>

<style lang="sass">
.pa-12.ma-12
  padding: 56px
  margin: 56px
</style>
