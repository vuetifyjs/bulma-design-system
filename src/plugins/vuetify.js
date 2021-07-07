import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

export default createVuetify({
  components,
  directives,
  display: {
    thresholds: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
  defaults: {
    // VBtn: {
    //   color: '#5A6268',
    //   flat: true,
    // }
    VAppBar: {
      flat: true,
      density: 'comfortable',
    },
    VAlert: {
      border: true,
      variant: 'contained-text',
    },
    VCard: {
      border: true,
      flat: true,
    },
  },
  icons: {
    aliases: {
      info: 'mdi-information-variant'
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          primary: '#0D6EFD',
          'primary-darken-1': '#3b5cff',
          'primary-darken-2': '#0227e4',
          'primary-darken-3': '#0221c8',
          'primary-darken-4': '#001eab',
          'primary-darken-5': '#00188f',
          secondary: '#6C757D',
          'secondary-darken-1': '#018786',
          error: '#DC3545',
          info: '#0DCAF0',
          success: '#198754',
          warning: '#FFC107',
        },
        variables: {
          'border-color': '#000000',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 0.87,
          'medium-emphasis-opacity': 0.7,
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
          'medium-emphasis-opacity': 0.6,
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
    },
  },
});
