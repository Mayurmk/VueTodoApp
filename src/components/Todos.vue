<template>
    <div>
        <div :key='todo._id' v-for="todo in todos">
            <TodoItem :todo='todo' @del-todo="$emit('del-todo', todo._id)" />
        </div>
    </div>    
</template>

<script>

import TodoItem from './TodoItem';

export default {
    name: 'Todos',
    props: ['todos'],
    components: {
        TodoItem
    }
}
</script>

<style scoped>

</style>


