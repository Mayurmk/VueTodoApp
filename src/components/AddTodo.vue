<template>
    <b-container>
        <b-row>
            <b-col>
                <form @submit="addTodo">
                    <b-form-input name="title" v-model="title" placeholder="Add Todo"/>
                    <b-form-input name="completed" v-model="completed" placeholder="flag (true | false)"/>
                    <!--<input type="submit" value="Submit" class="btn" />-->
                    <b-button variant="outline-primary" type="submit">Save</b-button>
                </form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    // import uuid from 'uuid';

    export default {
        name: 'AddTodo',
        data() {
            return {
                title: '',
                completed: ''
            }
        },
        methods: {
            addTodo(e) {
                e.preventDefault();
                const newTodo = {
                    title: this.title,
                    completed: this.completed,
                };
                // send to parent

                this.$emit('add-todo', newTodo);

                this.title = '';
                this.completed = '';

            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }
</style>


