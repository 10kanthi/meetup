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
    user: null,
    loading: false,
    error: null
  },
  mutations: { // are always syncronous
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
      // payload here represents the array meetups I created and fetched from firebase
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: { // only in actions we run asyncronous tasks
    loadMeetups ({ commit }) {
      commit('setLoading', true)
      firebase.database().ref('meetups').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          console.log(obj)
          for (let key in obj) {
            // store my objs in meetups array
            // id keys are genersated by firebase
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date
            })
          }
          commit('setLoadedMeetups', meetups)
          commit('setLoading', false)
        })
        .catch((error) => {
          console.log(error)
          commit('setLoading', true)
        })
    },
    createMeetup ({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }
      // Reach out to firebase and store my obj
      firebase.database().ref('meetups').push(meetup)
        .then((data) => {
          const key = data.key
          commit('createMeetup', {
            ...meetup,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signUserUp ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
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
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError ({ commit }) {
      commit('clearError')
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
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
