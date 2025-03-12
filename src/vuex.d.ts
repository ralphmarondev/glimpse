declare module 'vuex' {
    import { Store as VuexStore, StoreOptions, MutationTree, ActionTree, GetterTree } from 'vuex'
    import { ComponentCustomProperties } from 'vue'

    export * from 'vuex'

    export interface Store<S> extends VuexStore<S> { }

    export function createStore<S>(options: StoreOptions<S>): Store<S>
}

declare module '@vue/runtime-core' {
    // Declare your own store states.
    interface State {
        username: string
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}