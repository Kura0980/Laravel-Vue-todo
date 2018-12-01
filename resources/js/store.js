import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        works:[],
        lifes:[],
        plays:[],
        specials:[],
    },
    getters: {
        works: state => {
            return state.works;
        },
        lifes: state => {
            return state.lifes;
        },
        plays: state => {
            return state.plays;
        },
        specials: state => {
            return state.specials;
        }
    },
    mutations: {
        getTodoList (state, payload) {
            state.works = payload.work;
            state.lifes = payload.life;
            state.plays = payload.play;
            state.specials = payload.special;
        },
        addTodos (state, payload) {

        },
        changeStatus (state, payload) {
            if(payload.type === 1) {
                state.works[payload.index].done = payload.done;
            }
        },
    },
    actions: {
        getTodoList ({commit}) {
            axios.get("http://localhost/api/todoes")
                .then(response => {
                    commit('getTodoList', response.data);
                });
        },
        changeStatus ({commit}, payload) {
            commit('changeStatus',payload);
        }
    }
});