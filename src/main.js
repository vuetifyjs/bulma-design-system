import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from './plugins'
import vuetify from './plugins/vuetify'

const app = createApp(App)

registerPlugins()

app
  .use(vuetify)
  .mount('#app')
