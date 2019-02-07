import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.purple.lighten1, // #7E57C2
    secondary: colors.purple.lighten3, // #FFCDD2
    secondaryOrange: colors.red.lighten1, // #FFCDD2
    accent: colors.purple.accent1, // #EA80FC
    greylight: colors.grey.lighten5, // #FAFAFA
    greydark: colors.grey.darken4 // #212121
  }
})
