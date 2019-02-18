import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      // eslint-disable-next-line standard/object-curly-even-spacing
      { imageUrl: 'https://www.vosizneias.com/wp-content/uploads/2017/03/Trump-Tech-Pushback_sham-725x483.jpg',
        id: 'gfuygfu',
        title: 'Meetup in New York',
        date: '2019-06-19',
        location: 'New York, ES6 800X',
        description: 'Four loko small batch keytar swag, disrupt jianbing ramps readymade synth godard lomo blog biodiesel. Photo booth marfa pabst, trust fund selvage irony vice tattooed. Next level pinterest quinoa swag, fixie food truck green juice butcher fashion axe celiac mustache before they sold out. Yuccie sustainable twee, keffiyeh woke marfa before they sold out. Raclette jean shorts heirloom tilde, migas normcore cliche photo booth.' },
      // eslint-disable-next-line standard/object-curly-even-spacing
      { imageUrl: 'https://transferwise-blog.s3.amazonaws.com/currency-exchange-in-athens-greece-acropolis.jpg',
        id: 'ddwdwwdq12',
        title: 'Meetup in Athens',
        date: '2019-04-09',
        location: 'Athens, 985587',
        description: 'Bitters williamsburg food truck, jianbing man braid marfa crucifix fam wolf ugh. Lo-fi cronut echo park pabst YOLO mumblecore seitan iPhone venmo pinterest gentrify lyft gastropub. Stumptown asymmetrical 90.Bitters williamsburg food truck, jianbing man braid marfa crucifix fam wolf ugh. Lo-fi cronut echo park pabst YOLO mumblecore seitan iPhone venmo pinterest gentrify lyft gastropub. Stumptown asymmetrical 90s aesthetic cold-pressed pabst sriracha offal tote bag bitters pitchfork street art scenester pork belly. Biodiesel cornhole cardigan tacos williamsburg pug hoodie iceland pitchfork.' },
      { imageUrl: 'https://www.steigenberger.com/cache/images/berlin_fotolia_93887_2306ae4113b62425b112e36-1-1.jpg',
        id: 'ddwdwwdqfffff12',
        title: 'Meetup in Berlin',
        date: new Date(),
        location: 'Berlin, 10409',
        description: 'Prism pinterest tumeric single-origin coffee leggings. Put a bird on it gastropub cliche marfa, semiotics authentic pickled wayfarers synth bicycle rights iceland butcher +1 biodiesel hoodie. Cardigan deep v four loko subway tile banh mi mlkshk kogi taxidermy fingerstache. Beard tilde twee plaid master cleanse hoodi' },
      { imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/23/16/shutterstock-471228719.jpg?    w968h681',
        id: 'ddwddddddddg444dq12',
        title: 'Meetup in Milan',
        date: new Date(),
        location: 'Milan, 45889',
        description: 'Prism pinterest tumeric single-origin coffee leggings. Put a bird on it gastropub cliche marfa, semiotics authentic pickled wayfarers synth bicycle rights iceland butcher +1 biodiesel hoodie. Cardigan deep v four loko subway tile banh mi mlkshk kogi taxidermy fingerstache. Beard tilde twee plaid master cleanse hoodi' }
    ],
    user: null
  },
  mutations: { // are always syncronous
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: { // usally asyncronous
    createMeetup ({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.loaction,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'fakeid'
      }
      // Reach out to firebase and store my obj
      commit('createMeetup', meetup)
    },
    signUserUp ({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn ({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  },
  // with getters we can use the components is many places inside our application
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    user (state) {
      return state.user
    }
  }
})
