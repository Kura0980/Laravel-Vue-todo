<template>
    <div>
        <ul class="list-group">
            <app-todo v-for="(play, index) in plays" :todo="play" :index="index" :type=3 :key="index"></app-todo>
        </ul>
        <app-add-todo :type=3></app-add-todo>
    </div>
</template>

<script>
import Todo from './Todo.vue';
import AddTodo from './AddTodo.vue';

export default {
    computed: {
        plays () {
            return this.$store.getters.plays;
        }
    },
    components: {
        appTodo: Todo,
        appAddTodo: AddTodo
    }
}
</script>

