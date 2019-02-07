<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          :src= "meetup.imageUrl"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ meetup.title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">{{ meetup.date }}</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="secondaryOrange">Share with your Friends</v-btn>
          <v-btn flat color="secondaryOrange">Register</v-btn>
        </v-card-actions>
        <v-card-text>
            <div>
                <h3 class="secondary--text">17th of July 2019 - Where it takes place</h3>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione enim odio quia inventore qui, exercitationem id doloremque illo expedita harum repudiandae voluptatibus quae itaque dolorem ab illum mollitia
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae id, ex eius nisi dolore vitae! Ab delectus beatae, recusandae ipsum dignissimos iusto, deleniti, quos esse vel est ad at alias? modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illum reprehenderit architecto molestias. Vero, fugiat cumque! Voluptatibus amet cum repellat ea maxime cupiditate praesentium eaque vel. Consectetur obcaecati praesentium velit ducimus non commodi ratione ad quasi aliquam vitae in maiores, reprehenderit quis fuga rem dolor nobis unde voluptatum debitis corrupti explicabo dicta tenetur at exercitationem. Totam dignissimos possimus facilis. Eos quasi sed, neque magni rerum facilis suscipit repudiandae cupiditate ab? Unde, voluptatum. Voluptas voluptatem modi quae tempore molestiae, alias, qui optio amet explicabo dolores perspiciatis porro omnis? Nostrum, quos optio! Perspiciatis similique assumenda odio quis unde cupiditate aliquam iste enim.</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
