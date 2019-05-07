<template>
    <div class="container">
        <form>
            <div class="row" v-if="!isSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Enter Your Data</h4>
                        </div>
                        <div class="panel-body">

                            <div class="form-group">
                              <app-fullname v-model="userData.fullname"></app-fullname>
                            </div>

                            <div class="form-group">
                                <label for="email">Mail</label>
                                <input
                                        type="text"
                                        id="email"
                                        class="form-control"
                                        v-model.lazy="userData.email">
                            </div>

                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                        type="password"
                                        id="password"
                                        class="form-control"
                                        v-model.lazy="userData.password1">
                            </div>

                            <div>Store Data in Database?</div>
                            <div class="form-group">
                                <label for="yes">
                                    <input
                                            type="radio"
                                            id="yes"
                                            value="yes"
                                            v-model="userData.stored"> Yes
                                </label>
                                <label for="no">
                                    <input
                                            type="radio"
                                            id="no"
                                            value="no"
                                            v-model="userData.stored"> No
                                </label>
                            </div>
                            <button class="btn btn-primary" @click.prevent="submitted()">Submit</button>

                        </div>

                    </div>
                </div>
          </div>
        </form>
        <hr>
        <div class="row"  v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.fullname}}</p>
                        <p>Mail: {{userData.email}} </p>
                        <p>Password: {{userData.password1}}</p>
                        <p>Store in Database?: {{userData.stored}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Fullname from './assets/Fullname.vue';
    export default {
      data(){
        return{
          userData: {
            fullname: '',
            email: '',
            password1: '',
            stored:'yes'
          },
          isSubmitted: false
        }
      },
      components:{
          appFullname: Fullname
      },
      methods:{
        submitted(){
          this.isSubmitted=true;
        }
      },
    }
</script>

<style>
</style>
