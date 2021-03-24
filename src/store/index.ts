import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

import storeHome from './modules/home'

export interface State {
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

const globalStore = {

}

export const store = createStore<State>({
    state() {
        return {
            count: 0
        }
    },
    getters: {
        count(state) {
            return state.count
        }
    },
    mutations: {
        ['INCREASE'](state, data) {
            state.count = data
        }
    },
    actions: {
        increaseAction(context: any, data) {
            context.commit('INCREASE', data)
        }
    },
    modules: {
        storeHome
    }

})