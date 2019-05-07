<template>
    <div >
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    import {fruitMixIn} from './fruitMixin'
    export default {
      mixins:[fruitMixIn],
      created(){
        console.log('created list')
      }
    }
</script>

<style>

</style>
