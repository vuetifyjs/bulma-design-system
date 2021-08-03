<template>
  <v-app>
    <v-app-bar>
      <v-container class="py-0 d-flex">
        <v-app-bar-title>
          <v-icon class="mr-2" icon="mdi-draw"></v-icon>

          Album
        </v-app-bar-title>

        <v-btn size="large" text>Docs</v-btn>

        <v-btn size="large" text>Quick start</v-btn>

        <v-btn size="large" text>Code</v-btn>

        <v-spacer></v-spacer>

        <v-btn class="text-white" color="primary">
          <v-icon class="mr-2">mdi-download</v-icon>
          Get Vuetify 3.0
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld/> -->

      <v-container class="text-center py-16">
        <section>
          <h1 class="text-h1 mb-2">Album example</h1>

          <v-responsive class="text-medium-emphasis text-h5 mx-auto" max-width="610">
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
          </v-responsive>

          <div class="mt-4">
            <v-btn class="mr-3 text-white" size="large" color="primary">Main call to action</v-btn>

            <v-btn class="ml-3" size="large" color="secondary">Secondary action</v-btn>
          </div>
        </section>
      </v-container>

      <div class="bg-grey-lighten-4">

      <v-container>
        <v-row dense justify="center">
          <v-col cols="6">
            <v-alert
              color="success"
              closable
            >
              Notification example<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-alert>
          </v-col>
          <v-col cols="6">
            <v-alert
              variant="contained"
              color="success"
              closable
            >
              Notification example<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-alert>
          </v-col>
        </v-row>

        <v-row dense justify="center">
          <v-col cols="6">
            <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
          </v-col>
        </v-row>

        <v-row dense justify="center">
          <v-col cols="6">
            <v-card>
              <template #media>
                <v-img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></v-img>
              </template>
              <v-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                <div class="text-grey-lighten-1">Posted: 11:03 03.08.2021</div>
              </v-card-text>

              <template #actions>
                <v-btn text size="x-large" :rounded="0">Like</v-btn>
                <v-btn text size="x-large" :rounded="0">Comment</v-btn>
                <v-btn text size="x-large" :rounded="0">Repost</v-btn>
              </template>
            </v-card>
          </v-col>
        </v-row>

        <v-pagination
          v-model="page"
          prev-icon=""
          next-icon=""
          color="primary"
          :length="60"
        ></v-pagination>
      </v-container>
    </div>

    <v-footer>
      <v-container>
        <p>
          © Vuetify

          <a href="#" class="float-right">Back to top</a>
        </p>

        <p>
          Read our documentation to get started with creating your Vue apps with Vuetify.
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
    page: 30,
    breadcrumbs: [
      {
        text: 'Dashboard',
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        href: 'breadcrumbs_link_2',
      },
    ],
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
