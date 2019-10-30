<template>
    <div id="app">
        <div id="nav">
            <button @click="updata()">修改</button>
            <button @click="create()">添加</button>
        </div>
        <router-view />
    </div>
</template>
<script>
    import HRLLO from 'jquery';
    export default {
        components: {
            HRLLO
        },
        name: 'bo',
        methods: {
            updata() {
                this.$router.push('/')
            },
            create() {
                this.$router.push('/addto')
            }
        },
    }
</script>
<style lang="scss">

</style>