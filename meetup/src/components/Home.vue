<template>
    <v-container>
        <!-- first row -->
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-sm-right text-xs-center">
                <v-btn large router to="/meetups" class="secondary">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left text-xs-center">
                <v-btn large router to="/meetup/new" class="secondary">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <!-- second row -->
        <v-layout row wrap>
            <v-flex xs12>
                 <v-carousel>
                    <v-carousel-item
                    v-for="(meetup,i) in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl"
                    reverse-transition="fade"
                    transition="fade"
                    ></v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                meetups: [
                    { imageUrl :'https://www.vosizneias.com/wp-content/uploads/2017/03/Trump-Tech-Pushback_sham-725x483.jpg', id: 'gfuygfu', title: 'Meetup in New York'},
                     { imageUrl :'https://www.telegraph.co.uk/travel/destination/article147913.ece/ALTERNATES/w460/London-lights.jpg', id: 'ddwdwwdq12', title: 'Meetup in London'}
                ]
            }
        }
    }
</script>