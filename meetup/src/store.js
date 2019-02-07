import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      // eslint-disable-next-line standard/object-curly-even-spacing
      { imageUrl: 'https://www.vosizneias.com/wp-content/uploads/2017/03/Trump-Tech-Pushback_sham-725x483.jpg',
        id: 'gfuygfu',
        title: 'Meetup in New York',
        date: '2019-06-19' },
      // eslint-disable-next-line standard/object-curly-even-spacing
      { imageUrl: 'https://transferwise-blog.s3.amazonaws.com/currency-exchange-in-athens-greece-acropolis.jpg',
        id: 'ddwdwwdq12',
        title: 'Meetup in Athens',
        date: '2019-04-09' },
      { imageUrl: 'https://www.steigenberger.com/cache/images/berlin_fotolia_93887_2306ae4113b62425b112e36-1-1.jpg',
        id: 'ddwdwwdqfffff12',
        title: 'Meetup in Berlin',
        date: '2019-04-09' },
      { imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/23/16/shutterstock-471228719.jpg?    w968h681',
        id: 'ddwddddddddg444dq12',
        title: 'Meetup in Milan',
        date: '2019-04-09' }
    ],
    user: {
      id: 'fhfj1545',
      registeredMeetups: ['ddwddddddddg444dq12', 'ddwdwwdq12']
    }
  },
  mutations: {

  },
  actions: {

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
    }
  }
})
