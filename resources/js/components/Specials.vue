<template>
    <div>
        <ul class="list-group">
            <app-todo v-for="(special, index) in specials" :todo="special" :index="index" :type=4 :key="index"></app-todo>
        </ul>
        <app-add-todo :type=4></app-add-todo>
    </div>
</template>

<script>
import Todo from './Todo.vue';
import AddTodo from './AddTodo.vue';

export default {
    computed: {
        specials () {
            return this.$store.getters.specials;
        }
    },
    components: {
        appTodo: Todo,
        appAddTodo: AddTodo
    }
}
</script>

