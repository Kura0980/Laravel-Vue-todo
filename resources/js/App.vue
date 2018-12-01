<template>
    <div>
        <app-header></app-header>
        <app-group></app-group>
        <router-view></router-view>
    </div>    
</template>

<script>
import Header from './components/Header.vue';
import Group from './components/Group.vue';

export default {
    components: {
        appHeader: Header,
        appGroup: Group
    },
    created() {
        this.$store.dispatch('getTodoList');
    }
}
</script>

<style>

</style>