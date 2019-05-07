<template>
    <div>
      <h1>{{color}}</h1>
      <h2>A {{color}} Emotion:</h2>
      <slot name="emotion">
          {{color}} is the color of anger.
      </slot>
      <hr>
      <h2>A {{color}} Book:</h2>
      <slot name="book">
          A {{color}} Book: The Red Sparrow
      </slot>
      <slot></slot>
    </div>
</template>

<script>

  export default{
       data:function(){
         return{
            color: 'Red'
         }
       }
   }

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
