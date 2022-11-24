<template>
    <section class="LeftDetails">
      <img class="img1" src="./assets/Path662.png"  alt="">
      <img class="img2" src="./assets/Path663.png"  alt="">
      <img class="img3" src="./assets/Path664.png"  alt="">
      <img class="img4" src="./assets/POSE_02.png" alt="">
      
      <h1>Welcome back!</h1>
      <span class="p1">Sign In to find opportunities that match your interests. We have both part-time and full-time roles that can be done online and in-person.</span>
      <div class="addon" style="transform: translate(165px,730px);display:flex;width:25.06px; justify-content: space-between;flex-wrap: nowrap;">
        <div style="height:3px; width:15.06px;background:white;border-radius: 8px; "></div>
        <div style="height:3px; width:2.82px; background:white;opacity: 0.5;border-radius: 8px; "></div>
        <div style="height:3px; width:2.82px; background:white;opacity: 0.5;border-radius: 8px; "></div>
      </div>
      <span class="p2">Please contact us at +91-9380644532 if you need any assistance.</span>
    
    </section>
    <router-view class="loginsection"/>
</template>

<script>
// import LoginPage from './views/Login.vue'
export default {
    name:"App",
    props: {
    msg: String
    },
    components:{
      // LoginPage
    }
    }
</script>

<style>
  *{
    margin: 0;;
    padding: 0%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  html{
    background-color:rgb(0, 0, 0);
  }
  
  #app{
    position :relative;
    width: 1280px;
    height:860px;
    bottom: 0;
    padding:0;
    margin:0;
    left:7.8%;
    top:1%;
    background-color:rgb(255, 255, 255);
  }
  
  .LeftDetails{
    position: absolute;
    width: 526px;
    height: 860px;
    left: 0px;
    top: 0px;
    background: #404555;
  }
  .img1{
    position: absolute;
    width: 119.87px;
    height: 126.7px;
    left: 155px;
    top: 216px;
  }
  .img2{
    position: absolute;
    width: 43.45px;
    height: 43.64px;
    left: 328.55px;
    top: 325.36px;
    }
  .img3{
    position: absolute;
    width: 118.55px;
    height: 126.7px;
    left: 230.96px;
    top: 242.3px;
  }
  .img4{
    position: absolute;
    width: 165px;
    height: 219px;
    
    bottom: 0px;
  }
  .LeftDetails>h1{
    position: absolute;
    width: 324px;
    height: 32px;
    left: 165px;
    top: 540px;

    /* Heading / Bold / 24 */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */


    /* Neutral / White */

    color: #FFFFFF;
  }
  .LeftDetails>.p1{
    position: absolute;
    width: 337px;
    height: 96px;
    left: 165px;
    top: 584px;

    /* Body / Regular / 16 */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */


    /* Neutral / White */

    color: #FFFFFF;
  }
  .LeftDetails>.p2{
    position: absolute;
    width: 337px;
    height: 36px;
    left: 165px;
    bottom: 18px;

    /* Body/Regular/12 */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* or 150% */


    /* Neutral / White */

    color: #FFFFFF;
  }

  .loginsection{
    position: absolute;
    width: 384px;
    height: 294px;
    left: 711px;
    top: 273px;
  }
  
</style>
