import Vue from 'vue';
import Vuex from 'vuex';
import menus from "./modules/menus"
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: '',
        userinfo:{
            name :  '',
            department : '',
            dpid : ''
        }

    },
    mutations: {
        SET_USERINFO:(state,userinfo) => {
            state.userinfo = userinfo
        },
        SET_TOKEN:(state, token) => {
            state.token = token
            localStorage.setItem("token",token)
        },
        resetStatus: (state)=> {
            state.token = ''
        }
    },
    modules: {
        menus
    }
});