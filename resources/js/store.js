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
        addTodo (state, payload) {
            const type = payload.group_id;
            const todo = {
                action: payload.action,
                done: payload.done 
            };
            const group_map = {
                1: 'works',
                2: 'lidfes',
                3: 'plays',
                4: 'specials'
            }

            state[group_map[type]].push(todo);
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
        addTodo ({commit}, payload) {
            axios.post("http://localhost/api/todoes", payload)
                .then(response => {
                    commit('addTodo', response.data);
                });
        },
        changeStatus ({commit}, payload) {
            commit('changeStatus',payload);
        }
    }
});