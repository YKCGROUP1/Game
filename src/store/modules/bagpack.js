import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default ({
    state: {
        backpack: [{name:'原石',num:1}],
    },
    mutations: {
        addItemToBackpack(state, item) {
            const existingItem = state.backpack.find(i => i.name === item.name);
            if (existingItem) {
                existingItem.num++;
            } else {
                state.backpack.push({ name: item.name, num: 1 });
            }
        },
        removeItemFromBackpack(state, index) {
            state.backpack.splice(index, 1);
        },
    },
    actions: {
        addItem({ commit }, item) {
            commit('addItemToBackpack', item);
        },
        removeItem({ commit }, index) {
            commit('removeItemFromBackpack', index);
        },
    },
});