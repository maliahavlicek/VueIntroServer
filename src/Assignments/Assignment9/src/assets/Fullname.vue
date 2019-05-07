<template>
<div>
    <div class="form-group">
        <label for="First Name">First Name:</label>
                        <input
                                id="first"
                                type="text"
                                v-model="first"
                                @input="updateName"
                                class="form-control">
                                </div>
    <div class="form-group">

        <label for="First Name">Last Name:</label>
                    <input
                            id="last"
                            type="text"
                            v-model="last"
                            @input="updateName"
                            class="form-control">
    </div>
</div>
</template>

<script>
    export default {
        props:['fullname'],
        data(){
          return{
            first: '',
            last: ''
          }
        },
        methods: {
          updateName(){
            let name = this.last +" " + this.first;
            console.log('fullName: '+ this.last +" " + this.first);
            this.$emit('input', name);
          }
        }
    }
</script>

<style scoped>

</style>
