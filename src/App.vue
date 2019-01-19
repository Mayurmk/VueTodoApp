<template>
    <div id="app">
        <Header/>
        <AddTodo @add-todo="addTodo"/>
        <Todos :todos="todos" @del-todo="deleteTodo"/>
    </div>
</template>

<script>
    import Todos from "./components/Todos";
    import Header from "./components/layout/Header";
    import AddTodo from "./components/AddTodo";
    import axios from "axios";

    export default {
        name: "app",
        components: {
            Todos,
            Header,
            AddTodo
        },
        data() {
            return {
                msg: "Hello",
                todos: []
            };
        },
        methods: {
            deleteTodo(id) {

                this.todos = this.todos.filter(data => data._id !== id);

                axios
                    .delete(`http://localhost:3000/${id}`)
                    .then()
                    .catch(err => console.log(err));
            },
            addTodo(newTodo) {
                const {title, completed} = newTodo;
                this.todos = [...this.todos, newTodo];
                axios
                    .post("http://localhost:3000/todo", {
                        title,
                        completed
                    })
                    .then()
                    .catch(err => console.log(err));
            }
        },
        created() {
            axios
                .get("http://localhost:3000/todo")
                .then(res => (this.todos = res.data))
                .catch(err => console.log(err));
        }
    };
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.4;
    }

    .btn {
        display: inline-block;
        border: none;
        background: #555;
        color: #fff;
        padding: 7px 20px;
        cursor: pointer;
    }

    .btn:hover {
        background: #666;
    }
</style>
