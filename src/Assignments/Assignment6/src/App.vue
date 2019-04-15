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

  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import ServerNumbers from './ServerNumbers.vue';
  import ServerDetails from './ServerDetails.vue';

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
