<template>
    <div class="container">
        <app-header></app-header>

        <hr>
        <div class="row">
            <app-server-numbers></app-server-numbers>
            <app-server-details></app-server-details>
        </div>
        <hr>
         <app-footer></app-footer>
    </div>
</template>

<script>

  import Header from './components/shared/Header.vue';
  import Footer from './components/shared/Footer.vue';
  import ServerNumbers from './components/server/ServerNumbers.vue';
  import ServerDetails from './components/server/ServerDetails.vue';

  export default {
    components: {
       'app-header' : Header,
       'app-server-numbers': ServerNumbers,
       'app-server-details': ServerDetails,
       'app-footer' : Footer
    }
  }



</script>

<style>

</style>
