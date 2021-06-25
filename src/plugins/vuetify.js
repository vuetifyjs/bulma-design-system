import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

export default createVuetify({
  components,
  directives,
  defaults: {
    // VBtn: {
    //   color: '#5A6268',
    //   flat: true,
    // }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          primary: '#0062cc',
          'primary-darken-1': '#3700B3',
          secondary: '#6c757d',
          'secondary-darken-1': '#018786',
          error: '#dc3545',
          info: '#17a2b8',
          success: '#28a745',
          warning: '#ffc107',
        },
        variables: {
          'border-color': '#000000',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 0.87,
          'medium-emphasis-opacity': 0.60,
          'disabled-opacity': 0.38,
          'activated-opacity': 0.12,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'dragged-opacity': 0.08,
          'pressed-opacity': 0.16,
          'kbd-background-color': '#212529',
          'kbd-color': '#FFFFFF',
          'code-background-color': '#C2C2C2',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#212121',
          primary: '#BB86FC',
          'primary-darken-1': '#3700B3',
          secondary: '#03DAC5',
          'secondary-darken-1': '#03DAC5',
          error: '#CF6679',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
        variables: {
          'border-color': '#FFFFFF',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 0.87,
          'medium-emphasis-opacity': 0.60,
          'disabled-opacity': 0.38,
          'activated-opacity': 0.12,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'dragged-opacity': 0.08,
          'pressed-opacity': 0.16,
          'kbd-background-color': '#212529',
          'kbd-color': '#FFFFFF',
          'code-background-color': '#B7B7B7',
        },
      },
    }
  }
})
