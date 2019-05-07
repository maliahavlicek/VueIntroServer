<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase |to-lowercase}}</p>
                <hr>
                <button @click="fruits.push('plum')">Add new Item</button>
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <hr>
                <appList></appList>
            </div>
        </div>
    </div>
</template>

<script>
import List from './List.vue';
import {fruitMixIn} from './fruitMixin';
    export default {
      mixins :[fruitMixIn],
      data(){
        return{
          text: 'hello there'
        }
      },
      components:{
        appList: List
      },
      filters:{
        toUppercase(value) {
          return value.toUpperCase();
        }
      },
      created(){
        console.log('created main app');
      }
    }
</script>

<style>

</style>
