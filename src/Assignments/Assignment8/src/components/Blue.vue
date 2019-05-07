<template>
    <div>
      <h1>{{color}}</h1>
      <h2>A {{color}} Book:</h2>
      <slot name="title">
          Kelly's Blue Book
      </slot>
      <hr>
      <h2>A {{color}} Song:</h2>
      <slot name="song">
          A {{color}} Song: Litle Boy {{color}} Come blow your horn.
      </slot>
      <slot></slot>
    </div>
</template>

<script>
  export default{
       data:function(){
         return{
            color: 'Blue'
         }
       }
   }


</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
