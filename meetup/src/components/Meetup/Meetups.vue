
<template>
  <v-layout row>
    <v-flex xs12 sm6 md6 offset-sm3>
      <v-card v-for="meetup in meetups" :key="meetup.id" class="mb-5">
        <v-img
          :src= "meetup.imageUrl"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{ meetup.title}}</div>
            <span class="grey--text">{{ meetup.date | date  }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat
          :to="'/meetups/'+ meetup.id"
          color="secondaryOrange"> More Info
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data () {
    return {
      show: '',
    }
  },
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>
