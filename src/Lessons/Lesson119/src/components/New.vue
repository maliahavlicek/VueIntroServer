<template>
    <div>
      <h3>New quote</h3>
      <button @click="counter++">Increase!</button>
      <p>Counter: {{counter}}</p>
    </div>
</template>

<script>
  export default{
    data: function(){
      return{
        counter: 0
      };
    },
   destroyed(){
      console.log('New destroyed');
   },
   deactivated(){
      console.log("new deactiveated");
   },
   activated(){
      console.log("new activated");
   }

  }
</script>

<style scoped>


</style>
