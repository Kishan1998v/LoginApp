<template>
    <form novalidate @submit.prevent="loginUserFn" class="LoginPage">
      <h1 class="Text">Sign In to WisdomCircle</h1>
      <p class="small_Para">Don’t have an account? <router-link to="/SignUp" class="signIntag">Sign Up</router-link> </p>
      <br>
      <input :class="`${errors.username ?'is-invalid':'is-valid'}`" v-model="username" type="text" name="email" id="email" placeholder="Email or Mobile Number">
      <span id="UserMessage">{{errors.username}}</span>
      
      <br>
      <input :class="`${errors.password ?'is-invalid':'is-valid'}`" v-model="password" :type="showInput ? 'text' : 'password'" name="Password" id="Password" placeholder="Password">
      <img class="eye" @click="togglefn()" src="../assets/Vector.png" alt="">
      <span id="UserMessage">{{errors.password}}</span>
    
      <br>
      <router-link to="/forgotPassword" class="forgotPass">Forgot password</router-link>

      <br>
      <button type="submit"><span class="signintext">Sign In</span></button>
    </form>
  
</template>

<script>
import validateLoginInput from "../validation/ValidateLoginInput";
export default {
    name:"LoginPage",
    props: {
    msg: String
  },
  data(){
    return{
      showInput:false,
      username:"",
      password:"",
      errors:{}    }
  },
  methods:{
    loginUserFn(){
      let credentials = {
        username: this.username,
        password: this.password
      };
      const{isInvalid,errors} = validateLoginInput(credentials);
      if(isInvalid){
        this.errors = errors
      }
      else{
        this.errors = {}
        let IsUsers = localStorage.users;
        IsUsers= JSON.parse(IsUsers)
        const isAlphaNumeric = str => /^[0-9]+$/gi.test(str);
        if(isAlphaNumeric(credentials.username)){
          let usernameIndex = IsUsers.findIndex((user) => user.phone === credentials.username);
      
            if(usernameIndex >-1){
                let passwordIndex = IsUsers.findIndex((user) => user.password === credentials.password);
                if(passwordIndex >-1){
                    this.$router.push('/WelCome');
                }
                else{
                  this.errors.password = "Sorry! Password entered is incorrect"
                }
            }
            else{
              this.errors.username = "Mobile Number does not exist!";
            }

        }
        else{
          let usernameIndex = IsUsers.findIndex((user) => user.email === credentials.username);
        
          if(usernameIndex >-1){
              let passwordIndex = IsUsers.findIndex((user) => user.password === credentials.password);
              if(passwordIndex >-1){
                  this.$router.push('/WelCome');
              }
              else{
                this.errors.password = "Sorry! Password entered is incorrect"
              }
          }
          else{
            this.errors.username = "Email does not exist!";
        }
          }
      }
    },
    togglefn(){
      this.showInput =!this.showInput;
    }
  }
}
</script>

<style>
#UserMessage{
width: 302px;
height: 22px;
margin-bottom: 3px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
color: #D92D20;
flex: none;
order: 1;
flex-grow: 0;
}
  .eye{
    position: absolute;
    left: 91%;
    top: 54%;
    
    
/* Neutral / Charcoal */
  }
  h1{
    position: relative;
    width: 345px;
    height: 32px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  p{
    position: relative;
    width: 256px;
    height: 24px;
    top:2px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100;
    font-size: 16px;
    line-height: 24px;
    color: #404555;
  }
  input{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    width: 384px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #DCDEE5;
    border-radius: 4px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

  }
  input::placeholder { 
      font-family: 'Poppins';
    }
  .signIntag{
    color: #2558E5;
    font-family: 'Poppins';
  }
  .forgotPass{
    position: absolute;
    width: 120px;
    height: 22px;
    left:68.5%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 13.9px;
    line-height: 22px;
    /* identical to box height, or 157% */
    text-align: right;

    /* Accent / Royal Blue / 4 */

    color: #2558E5;
  }
  button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 32px;
    gap: 8px;
    top: 244px;
    position: absolute;
    width: 384px;
    height: 48px;
    /* Primary/4 */
    background: #F1C12B;
    border-radius: 4px;
    border: none;
  }
  .signintext{
    width: 62px;
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
    border: 1px solid #D92D20;
  }
  .is-valid{
    border: 1px solid #DCDEE5;
  }

</style>