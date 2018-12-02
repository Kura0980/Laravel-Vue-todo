<template>
    <div class="add-todo input-group">
      <input type="text" class="form-control" placeholder="やることを追加しよう!" v-model="action">
      <div class="input-group-append">
        <button class="btn btn-secondary" type="button" @click="addTodo">追加</button>
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
            this.action = '';
        }
    }
}
</script>

<style scope>
    .add-todo {
        position: fixed;
        bottom: 0;
        z-index: 10;
        margin-bottom: 0px;
    }
</style>