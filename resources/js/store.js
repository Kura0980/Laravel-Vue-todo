import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const group_map = {
    1: 'works',
    2: 'lifes',
    3: 'plays',
    4: 'specials'
}

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
                id: payload.id,
                action: payload.action,
                done: payload.done 
            };
            state[group_map[type]].push(todo);
        },
        changeStatus (state, payload) {
            const type = payload.type;
            const done = payload.done;
            const index = payload.index;
            state[group_map[type]][index].done = done;
        },
        deleteTodo (state, payload) {
            const type = payload.type;
            const id = payload.id
            const todoes = state[group_map[type]];
            state[group_map[type]] = todoes.filter(todo => todo.id != id);
        }
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
            axios.put("http://localhost/api/todoes/"+payload.id, {done: payload.done})
                .then(response => {
                    const param = {
                        type: payload.type,
                        done: payload.done,
                        index: payload.index
                    }
                    commit('changeStatus', param);
                });
        },
        deleteTodo ({commit}, payload) {
            axios.delete("http://localhost/api/todoes/"+payload.id)
                .then(response => {
                    commit('deleteTodo', {id: payload.id, type: payload.type});
                });
        }
    }
});