<template>
    <form class="SignUp" @submit.prevent="registerUser()">
      <h1 class="Text3">Create an account</h1>
      <p class="small_Para">Already have an account? <router-link to="/" class="signIntag">Sign In?</router-link> </p>
      <br>
      <input v-model="firstname" type="string" name="firstname" id="firstname" placeholder="First Name ">
      
      <br>
      <input v-model="lastname" type="string" name="lastname" id="lastname" placeholder="Last Name">
      
      <br>
      <input v-model="email" type="Email" name="email" id="email" placeholder="Email Address">
      
      <br>
      <input v-model="phone" type="tel" name="Number" id="Number" placeholder="mobile Number" pattern="[0-9]{10}">
      
      <br>
      <input  v-model="password" type="Password" name="Password" id="Password" placeholder="Password">
      
      <br>
      <span class="passwordlen">Password must be at least 8 characters</span>
      <br>
      <br>
      <span>By clicking Sign Up you are indicating that you have read and acknowledged the <a href="#">Terms of Service</a> and <a href="#">Privacy Notice</a></span>
      <button type="submit"><span class="signuptext">Sign Up</span></button>
    </form>
</template>
<script>
import validateRegisterInput from "../validation/ValidateRegistereInput"
    export default{
        name:"SignUp",
        props: {
            msg: String
        },
        data(){
            return{
                firstname:"",
                lastname:"",
                email:"",
                phone:"",
                password:"",
                users:[]
            }
        },
        methods:{
            registerUser(){
                let user = {
                    firstname:this.firstname,
                    lastname:this.lastname,
                    email:this.email,
                    phone:this.phone,
                    password:this.password
                };
                console.log(user);
                const { isInvalid , errors} = validateRegisterInput(user);
                if(isInvalid){
                    this.errors=errors;
                    console.log(errors);
                }
                else{
                    this.errors={}
                    // store user in localStorage
                    if(localStorage.users){
                        let IsUser = localStorage.users;
                        this.users = JSON.parse(IsUser);
                    }
                    this.users.push(user);
                    localStorage.setItem('users',JSON.stringify(this.users));
                    this.firstname="",
                    this.lastname="",
                    this.email="",
                    this.phone="",
                    this.password=""
                    this.$router.push('/');
                }
            }
            

        }
    }

</script>
<style>
 .SignUp>h1{
    top: -125px;
 }
 .SignUp>p{
    top:-120px;
    width:345px;
 }
 .SignUp>input{
    position: relative;
    top:-120px;
 }
 .SignUp>button{
    top:360px;

 }
 .SignUp>span{
    position: relative; 
    top:-120px;
    width: 384px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    height: 36px;
 }
 .signuptext{
    width: 70px;
height: 26px;

/* Body / Semibold / 18 */

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 26px;
/* identical to box height, or 144% */


/* Neutral / Black */

color: #121317;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
 }
 .is-invalid{
    border-color:red;
 }
</style>