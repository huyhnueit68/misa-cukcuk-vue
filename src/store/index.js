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
        /**
         * is enable mass delete row
         */
        isMassDeleteRow: false,
        /**
         * number total mass delete
         */
        totalMassDelete: 0
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
        },
        DisableMassDelete(state) {
            state.isMassDeleteRow = false;
        },
        EnableMassDelete(state) {
            state.isMassDeleteRow = true;
        },
        SetTotalDelete(state, newTotal) {
            state.totalMassDelete = newTotal;
        }
    },
    actions: {},
    modules: {},
    getters: {

    }
})