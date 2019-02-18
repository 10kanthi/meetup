<template>
    <v-container>
        <!-- first row -->
        <v-layout row wrap class="mb-3">
            <v-flex xs12 sm6 class="text-sm-right text-xs-center">
                <v-btn large router to="/meetups" class="secondary">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left text-xs-center">
                <v-btn large router to="/meetup/new" class="secondary">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                    indeterminate
                    color="amber"
                    :width="7"
                    :size="60"
                    v-if="loading"
                ></v-progress-circular>
            </v-flex>
        </v-layout>
        <!-- second row -->
        <v-layout row wrap class="mt-3">
            <v-flex xs12>
                 <v-carousel hide-controls style="cursor:pointer" v-if="!loading">
                    <v-carousel-item
                    v-for="meetup  in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl"
                    @click="onLoadMeetup(meetup.id)"
                    reverse-transition="fade"
                    transition="fade"
                    ><div class="title"> {{ meetup.title }}</div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <!-- third row -->
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <h3>Choose a meetup!</h3>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    },
    loading () {
        return this.$store.getters.loading
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}

</script>

<style scoped>
    .title {
        position:absolute;
        bottom: 50px;
        background-color: aliceblue;
        opacity: 0.7;
        margin: 5px;
        padding: 5px;
        font-size: 2em;
        text-align: center;
    }

</style>
