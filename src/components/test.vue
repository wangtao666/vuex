<template>
  <div id="test">
    content is {{$store.state.count}}
    <button @click="increment">++5</button>
    <button @click="decrement">--3</button>
    <router-link to="/">返回</router-link>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed:mapGetters([

    ]),
    methods:mapActions([
      'increment',
      'decrement'
    ])
  }
</script>
<style></style>
