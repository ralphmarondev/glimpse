import { createStore } from 'vuex'
import type { State } from '@vue/runtime-core'

const store = createStore({
    state() {
        return {
            username: ''
        }
    },
    mutations: {
        setUsername(state: State, username: string) {
            state.username = username
        }
    }
})

export default store