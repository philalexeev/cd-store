<template>
  <div class="container">
    <h1>Vuex</h1>
    <hr>
    <p>counter is {{ counter }}</p>
    <p>amount is {{ amount }}</p>
    <button @click="increase(7)">Increment</button>
    <button @click="add">Increment from Actions</button>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">{{ todo.id }} --- {{ todo.done }}</li>
    </ul>
    <p>{{ foundTodo(3) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  computed: {
    amount() {
      return 12 + 8
    },
    ...mapState([
      'counter',
      'todos'
    ]),
    ...mapGetters({
      doneTodos: 'doneTodos',
      foundTodo: 'getTodoById'
    })
  },
  methods: {
    ...mapMutations([
      'increase'
    ]),
    add() {
      this.$store.dispatch('add', 7)
    }
  }
}
</script>

<style lang="scss">
  * {
    font-family: sans-serif;
    font-size: 20px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  .container {
    width: 700px;
    margin: 0 auto;
    padding: 30px 10px;
  }

  h1 {
    margin-bottom: 10px;
    font-size: 40px;
  }

  hr {
    margin-bottom: 20px;
  }

  p, button {
    margin-top: 20px;
  }

  li {
    margin-top: 10px;
  }

  button {
    padding: 10px 20px;
    border: 0;
    background-color: maroon;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.1s ease-in;

    &:hover {
      background-color: red;
    }
  }
</style>
