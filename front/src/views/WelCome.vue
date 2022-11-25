<template>
    <form class="LoginPage welcomepage">
        <h1>Welcome</h1>
        <button class="btn3"><router-link typeof="button" to="/"><span class="ReSignintxt">Return to sign In</span></router-link></button>
    </form>
</template>
<script>
    export default{
        name:"WelCome",
        props: {
    msg: String
  }
    }
</script>

<style>

.welcomepage >h1{
    text-align: center;
    position: relative;
    width: 345px;
    height: 32px;
    margin-bottom: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
.welcomepage> button{
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
    text-align: center;
    position: relative;
    width: 345px;
    height: 32px;
    left:-16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    color: black;
  }
</style>
