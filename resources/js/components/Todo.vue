<template>
    <li  class="list-group-item">
        {{todo.action}}
        <button
            @click="deleteTodo"
            class="btn btn-outline-danger float-right">
            削除
        </button>
        <button
            @click="changeStatus"
            class="btn float-right"
            v-bind:class="{ 'btn-primary': todo.done, 'btn-outline-primary': !todo.done }">
            {{ todo.done? '達成！' : '未達成' }}
        </button>
    </li>
</template>

<script>
export default {
    props: [
        'todo',
        'index',
        'type'
    ],
    methods: {
        changeStatus() {
            this.$store.dispatch('changeStatus', { id: this.todo.id, index: this.index, done: !this.todo.done, type: this.type });
        },
        deleteTodo() {
            this.$store.dispatch('deleteTodo', {id: this.todo.id, type: this.type});
        }
    }
}
</script>

<style scope>
    button {
        margin: 2px;
    }
</style>
