<template>
    <li  class="list-group-item">
        {{todo.action}}
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
            this.$store.dispatch('changeStatus', { index: this.index, done: !this.todo.done, type: this.type });
        },
        deleteTodo() {

        }
    }
}
</script>
