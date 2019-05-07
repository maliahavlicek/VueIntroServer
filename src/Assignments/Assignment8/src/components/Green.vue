<template>
    <div>
      <h1>{{color}}</h1>
      <h2>A {{color}} Book:</h2>
      <slot name="title">
          Little {{color}} Men
      </slot>
      <hr>
      <h2>A {{color}} Band:</h2>
      <slot name="band">
          A {{color}} Band: CeeLo Green
      </slot>
      <slot></slot>
    </div>
</template>

<script>
  export default{
       data:function(){
         return{
            color: 'Green'
         }
       }
   }

</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
