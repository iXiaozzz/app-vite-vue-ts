
interface storeHome {
    msg: string
}

export default {
    namespace: true,
    state() {
        return {
            msg: 'hello world.'
        }
    },
    getters: {
        msg(state: storeHome): string {
            return state.msg
        }
    },
    mutations: {
        ['UPDATE_MSG'](state: storeHome, data: string): void {
            state.msg = data
        }
    }
}