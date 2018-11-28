<template>
    <div>
        <ul>
            <li v-for="(item, index) in lists" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: ['買い物', '読書', 'ランニング']
        }
    }
}
</script>
