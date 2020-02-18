<template>
  <div class="todo-header">
    <h1>Todos</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'todo',
  data () {
    return {
    }
  },
  props: {
    username: String
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
.todo-header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex: 0 0 auto;
  position: relative;
  h1 {
    height: 140px;
    line-height: 140px;
    color: #67D4EB;
    letter-spacing: 2px;
  }
}
</style>
