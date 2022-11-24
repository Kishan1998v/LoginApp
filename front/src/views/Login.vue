<template>
    <form class="LoginPage">
      <h1 class="Text">Sign In to WisdomCircle</h1>
      <p class="small_Para">Don’t have an account? <router-link to="/SignUp" class="signIntag">Sign Up</router-link> </p>
      <br>
      <input type="Email" name="email" id="email" placeholder="Email or Mobile Number">
      <br>
      <input type="Password" name="Password" id="Password" placeholder="Password">
      <img src="../assets/Vector.png" alt="">
      <a href=""></a>
      <br>
      <router-link to="/forgotPassword" class="forgotPass">Forgot password</router-link>

      <br>
      <button type="submit"><span class="signintext">Sign In</span></button>
    </form>
  
</template>

<script>
export default {
    name:"LoginPage",
    props: {
    msg: String
  }
}
</script>

<style>
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

</style>