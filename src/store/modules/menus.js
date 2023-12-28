import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default ({
    state: {
        menuList: [],
        permList: [],

        hasRoute: false,

        editableTabsValue: 'DataShow',
        editableTabs: [{
            title: '数据看板',
            name: 'DataShow',

        }],
    },
    mutations: {
        setMenuList(state,menus){
          state.menuList = menus
        },
        setPermList(state,perms){
            state.permList = perms
        },

        changeRouteStatus(state, hasRoutes) {
            state.hasRoutes = hasRoutes
        },

        addTabsMenu(state, tab) {

            let index = state.editableTabs.findIndex(e => e.name === tab.name)

            if (index === -1) {
                state.editableTabs.push({
                    title: tab.title,
                    name: tab.name,
                });
            }
            state.edidableTabsValue = tab.name
        },
        resetState: (state) => {
            state.menuList = []
            state.permList = []

            state.hasRoutes = false
            state.editableTabsValue = 'DataShow'
            state.editableTabs = [{
                title: '数据看板',
                name: 'DataShow',
            }]
        }
    }
});