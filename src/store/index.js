import { createStore } from "vuex";
import authModule from '../store/modules/auth/index.js';
import hotelsModule from '../store/modules/hotels/index.js';

export default createStore({
  modules:{
    auth: authModule,
    hotels: hotelsModule
    },
  state() {
    return{
      hotelId: 'c3'
    }
  },
  getters:{
    hotelId(state){
      return state.hotelId;
    }
  },
  mutations: {},
  actions: {},
});
