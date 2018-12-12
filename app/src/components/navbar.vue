<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="../assets/logo.png" width="250" height="72">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            

           
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <button class="button is-danger" @click="clickonranking">Ranking</button>
                </div>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            clickonranking() {
                this.$emit('rankingtrue')
            }
        }
    }
</script>

<style scoped>
.navbar-item img {
    max-height: 72px 
}
</style>