<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const username = computed(() => store.state.username)
const setUsername = () => {
    store.commit('setUsername', 'Ralph Maron Eda')
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3 top-0 sticky-top">
            <div class="container py-2">
                <a class="navbar-brand" href="#">Glimpse</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Profile</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Theme
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Purple [Default]</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Orange</a></li>
                                <li><a class="dropdown-item" href="#">Violet</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <!-- content -->
        <div class="container">
            <div class="row">
                <!-- Left Column -->
                <div class="col-lg-3 d-none d-lg-block bg-light scrollable-column">
                    <div class="p-3">
                        <h5>Left Column</h5>
                        <p>Content for the left column.</p>
                    </div>
                </div>

                <!-- Middle Column (Scrollable) -->
                <div class="col-lg-6 col-md-12 bg-white scrollable-column">
                    <div class="p-3">
                        <div class="mb-3" v-for="i in 100">
                            <h5>Home</h5>
                            <div>Username: {{ username }}</div>
                            <button class="btn btn-primary mt-3" @click="setUsername">Update Username</button>
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="col-lg-3 d-none d-lg-block bg-light scrollable-column">
                    <div class="p-3">
                        <h5>Right Column</h5>
                        <p>Content for the right column.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.scrollable-column {
    overflow-y: auto;
    max-height: 100vh;

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>