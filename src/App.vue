<template>
  <v-app>
    <v-app-bar color="#343A40" class="text-white">
      <v-container class="py-0 d-flex">
        <div class="text-h5 mb-0 d-flex align-center">
          <v-icon class="mr-2" icon="mdi-camera-outline"></v-icon>

          Album
        </div>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-menu" border density="comfortable" rounded="md" min-width="56" height="40">
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld/> -->

      <v-container class="text-center py-16">
        <section>
          <h1 class="text-h1 font-weight-thin mb-2">Album example</h1>

          <v-responsive class="text-medium-emphasis text-h5 mx-auto font-weight-thin" max-width="610">
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
          </v-responsive>

          <div class="mt-4">
            <v-btn class="mr-1" color="primary">Main call to action</v-btn>

            <v-btn class="ml-1" color="secondary">Secondary action</v-btn>
          </div>
        </section>
      </v-container>

      <div class="bg-grey-lighten-4">

      <v-container>
        <v-row dense>
          <v-col cols="12" md="4" v-for="n in 9" :key="n">
            <v-card>
              <template #media>
                <v-img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></v-img>
              </template>
              <v-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </v-card-text>

              <template #actions>
                  <v-btn variant="outlined" size="small">View</v-btn>
                  <v-btn variant="outlined" size="small">Edit</v-btn>

                  <v-spacer></v-spacer>

                  <span class="text-body-2 text-medium-emphasis">9 mins</span>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      </div>

    <v-footer>
      <v-container>
        <p>
          Album example is © Bootstrap, but please download and customize it for yourself!

          <a href="#" class="float-right">Back to top</a>
        </p>

        <p>
          New to Bootstrap? Visit the homepage or read our getting started guide.
        </p>

      </v-container>
    </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>

<style lang="sass">
// Bugs
#app
  .v-app-bar__content
    flex: 1 0 auto

  .v-responsive__sizer
    transition: none

  .fill-height
    height: 100%

  .v-list-item--rounded
    border-radius: 4px

  .v-pagination
    .v-btn--rounded
      border-radius: 50%
</style>
