<template>
  <form class="ForgotPassword">
    <h1 class="Text">Forgot Password</h1>
    <p class="small_Para2">We’ll send you a reset password link to your registered email address</p>
    <br>
    <input  type="Email" name="email" id="email" placeholder="Registered Email">
    <br>
    <button class="bt2" type="submit"><span class="recoverytext">Email me a recovery link</span></button>
    <br>
    <button class="btn3"><router-link typeof="button" to="/"><span class="ReSignintxt">Return to sign In</span></router-link></button>
  </form>
</template>
<script>
 
  export default {
    name: 'ForgetPasswordPage',
    props: {
    msg: String
    },
    data(){
      return{
        email:"",
        errors:{}
      }
    },
    methods:{
        
    }
  }
</script>
<style>
.ForgotPassword>input{
  box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 12px 16px;
gap: 8px;

width: 384px;
height: 48px;

/* Neutral / White */

background: #FFFFFF;
/* Neutral / Divider */

border: 1px solid #DCDEE5;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}

.small_Para2{
  position: relative;
width: 384px;
height: 48px;

/* Body / Regular / 16 */

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */


/* Neutral/Grey */

color: #404555;
}
.bt2{
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
top:0;

border: none;;
width: 384px;
height: 48px;
background: #F1C12B;
border-radius: 4px;
}
.recoverytext{
  
  width: 224px;
height: 26px;

/* Body / Semibold / 18 */

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 26px;



/* Neutral / Black */

color: #121317;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
.btn3{
  position: relative;
  box-sizing: border-box;
  top:0;
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 32px;
gap: 8px;

width: 384px;
height: 48px;

/* Primary / 1 */

background: #FEFCF4;
/* Primary/6 */

border: 1px solid #A9871E;
border-radius: 4px;
}
.ReSignintxt{
  width: 148px;
  height: 26px;

/* Body / Semibold / 18 */

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 26px;
/* identical to box height, or 144% */


/* Primary/6 */

color: #A9871E;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}


</style>