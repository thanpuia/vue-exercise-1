import { createStore } from "vuex";

const store = createStore({
    state:{
        title:"Lux Vue",
        notes:[]
    },
    mutations:{
        SAVE_NOTE(state,title){
            state.notes.push(title);
        }
    },
    actions:{
        saveNote({commit}, title){
            commit('SAVE_NOTE',title);
        }
    },
    getters:{
        totalNotes(state) {
            return state.notes.length;
        }
    }
});

export default store;