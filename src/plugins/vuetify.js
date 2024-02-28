/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#314468', // Azul Hydrofert
          secondary: '#A3CE59', // Verde Claro Hydrofert
          terciary: '#5E5F6C', // Cinza Escuro Leudo
          quartiary: '#C8B4C5', // Cinza Claro Leudo
          quintenary: '#F0CA51', //  Amarelo Leudo 
          sentenary: '#E457AF', // Rosa Leudo
        },
      },
    },
  },
})
