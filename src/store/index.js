import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /**
         * set form model for action api
         */
        formMode: false,
        /**
         * set loading UI
         */
        isLoading: false,
        /**
         * is reload data
         */
        isReloading: false,
    },
    mutations: {
        FormStateEdit(state) {
            state.formMode = true;
        },
        FormStateAdd(state) {
            state.formMode = false;
        },
        DisableLoading(state) {
            state.isLoading = false;
        },
        EnableLoading(state) {
            state.isLoading = true;
        },
        DisableReloading(state) {
            state.isReloading = false;
        },
        EnableReloading(state) {
            state.isReloading = true;
        }
    },
    actions: {},
    modules: {},
    getters: {

    }
})