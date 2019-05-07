<template>
    <div class="col-xs-12 col-sm-6">
           <app-quote v-for="quote in quotes" :quote="quote"> </app-quote>
    </div>
</template>

<script>
   import { serverBus }from '../../main.js';
   import Quote from './Quote.vue';


   export default{
      data: function(){
        return {
          quotes: [
            {id: 1, status: 'Normal'},
            {id: 2, status: 'Critical'},
            {id: 3, status: 'Normal'},
            {id: 4, status: 'Normal'},
            {id: 5, status: 'Normal'}
          ]
        }
      },
     components: {
        'app-server': Server,
      },

</script>
