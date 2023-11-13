/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";
import { VDataIterator } from 'vuetify/labs/VDataIterator'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '##2196F3',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
    VDataIterator
  },
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
})
