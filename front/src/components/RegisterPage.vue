<template>
  <div>Regiter me</div>
  <div>
    <input v-model="email" type="email" name="email" id="email" placeholder="Email"/>
    <br>
    <input v-model="password" type="password" name="password" id="password" placeholder="password"/>
    <br>
    <button @click="register">SignUp</button>
  </div>
  

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name:'RegisterPage',
  props: {
    msg: String
  },
  data(){
    return{
      email:'abc',
      password:'123'
    }
  },
  watch:{
    email(value){
      console.log(value)
    }
  },
  mounted(){
    
  },
  methods:{
    async register(){
      const response = await AuthenticationService.register({
        email:this.email,
        pasword: this.password
      })
      console.log("register button is clicked", response.data)
    }
  }
}
</script>

<style>

</style>