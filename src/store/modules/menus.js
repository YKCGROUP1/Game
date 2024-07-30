import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default ({
    state: {
        menuList: [],
        permList: [],

        hasRoute: false,
        isExpanded: true, //侧边栏缩放
        editableTabsValue: '店铺概览',
        editableTabs: [{
            title: '店铺概览',
            name: 'nbhome',

        }],
    },
    mutations: {
        toggleExpanded(state) {
            state.isExpanded = !state.isExpanded;
        },
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
            state.editableTabsValue = '店铺概览'
            state.editableTabs = [{
                title: '店铺概览',
                name: '店铺概览',
            }]
        }
    }
});