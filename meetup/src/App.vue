<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav"
      temporary
      clipped
      fixed
      app
      dark
      class="secondaryOrange"
      >
      <v-list dense>
        <v-list-tile v-for="item in menuItems"
        :key="item.title"
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
       </v-list>

    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left dark class="primary" >
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" dark color="secondaryOrange" class="hidden-sm-and-up">
        <v-icon dark>list</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to ="/" tag="span" style="cursor:pointer">DevMeetup</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main style="margin-top:90px">
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    sideNav: false,
    menuItems: [
      { icon: 'add_circle', title: 'Create a meetup', link: '/meetup/new' },
      { icon: 'supervised_user_circle', title: 'View Meetups', link: '/meetups' },
      { icon: 'person', title: 'profile', link: '/profile' },
      { icon: 'face', title: 'Sign up', link: '/signin' },
      { icon: 'lock_open', title: 'Sign in', link: '/signup' }
    ]
  })
}

</script>
