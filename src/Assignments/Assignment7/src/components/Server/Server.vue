<template>


      <li class="list-group-item"
        @click="loadServerDetails()"
        :status="status"
        :id = "id">
            Server #{{ server.id }} Status: <span :class="{critical: server.status=='Critical'}">{{ server.status }}</span>
      </li>

    </template>

</template>

<script>

 import { serverBus }from '../../main.js';
 export default{
    props: ['server'],
    methods: {
      loadServerDetails(){
        serverBus.$emit('loadServer', this.server)
      }
    }

}




</script>

<style scoped>
  li{
  cursor: pointer
  }
  .critical{
  color: red
  }

</style>



