<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="secondaryOrange--text">Create a new Meetup</h2>
      </v-flex>
    </v-layout>
    <br>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="description"
                required></v-textarea>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12 sm6 md12 offset-md3 offset-sm3>
              <v-date-picker
                v-model="date"
                style="margin: 20px"
              ></v-date-picker>
              {{ date }}
                <v-time-picker v-model="time" format="24hr"></v-time-picker>
                {{ time }}
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="secondaryOrange"
                :disabled="!formIsValid"
                type="submit">Create Meetup</v-btn>
                {{ submitdate }}
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: this.submitdate,
      time: null
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
          this.location !== '' &&
          this.imageUrl !== '' &&
          this.description !== ''
    },
    submitdate () {
      const time = this.time
      const date = new Date().toISOString().substr(0, 10)
      const picked = 'Date of meetup: ' + date + ' on ' + time
      return picked
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submitdate
      }
      // dispatch action createmeetup and pass my obj meetupdata
      this.$store.dispatch('createMeetup', meetupData)
      // redirect to meetups page
      this.$router.push('/meetups')
    }
  }
}
</script>
