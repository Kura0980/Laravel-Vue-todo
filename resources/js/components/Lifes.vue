<template>
    <div>
        <ul class="list-group">
            <app-todo v-for="(life, index) in lifes" :todo="life" :index="index" :type=2 :key="index"></app-todo>
        </ul>
        <app-add-todo :type=2></app-add-todo>
    </div>
</template>

<script>
import Todo from './Todo.vue';
import AddTodo from './AddTodo.vue';

export default {
    computed: {
        lifes () {
            return this.$store.getters.lifes;
        }
    },
    components: {
        appTodo: Todo,
        appAddTodo: AddTodo
    }
}
</script>

