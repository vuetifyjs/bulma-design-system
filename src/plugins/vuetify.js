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
          primary: '#00D1B2',
          'primary-darken-1': '#00C2A5',
          'primary-darken-2': '#00AD93',
          'primary-darken-3': '#009C84',
          'primary-darken-4': '#008C77',
          'primary-darken-5': '#00806C',
          'on-primary': '#FFFFFF',
          secondary: '#EEEEEE',
          'secondary-darken-1': '#D6D6D6',
          error: '#F03A5F',
          'on-error': '#FFFFFF',
          info: '#3488CE',
          'on-info': '#FFFFFF',
          success: '#3EC487',
          'on-success': '#FFFFFF',
          warning: '#FFDC7D',
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
          'code-background-color': '#F5F5F5',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#212121',
          primary: '#00D1B2',
          'primary-darken-1': '#00C2A5',
          'primary-darken-2': '#00AD93',
          'primary-darken-3': '#009C84',
          'primary-darken-4': '#008C77',
          'primary-darken-5': '#00806C',
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
