<template>
    <div>
        <ul class="list-group">
            <app-todo v-for="(work, index) in works" :todo="work" :index="index" :type=1 :key="index"></app-todo>
        </ul>
        <app-add-todo :type=1></app-add-todo>
    </div>
</template>

<script>
import Todo from './Todo.vue';
import AddTodo from './AddTodo.vue';

export default {
    computed: {
        works () {
            return this.$store.getters.works;
        }
    },
    components: {
        appTodo: Todo,
        appAddTodo: AddTodo
    }
}
</script>

