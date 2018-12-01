<template>
    <div class="add-todo input-group mb-3">
      <input type="text" class="form-control" placeholder="やることを追加しよう!" v-model="action">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="addTodo">追加</button>
      </div>
    </div>
</template>

<script>
export default {
    props: [
        'type'
    ],
    data () {
        return {
            action: ''
        }
    },
    methods: {
        addTodo() {
            this.$store.dispatch('addTodo', {action: this.action, type: this.type});
        }
    }
}
</script>

<style scope>
    .add-todo {
        position: fixed;
        bottom: 0;
    }
</style>