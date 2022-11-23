<template>
  <div class="window">
        <section id = "Details">
        </section>
        <SignIns/>
  </div>
  
</template>

<script>
import SignIns from './components/SignIns.vue'

export default {
  name: 'App',
  components: {
    SignIns,
  }
}
</script>

<style>
  html{
        width: 1280px;
        height: 840px;
    }
    .window{
        position: relative;
        
        background: #FFFFFF;
    }
    
    #Details{    
        /* Rectangle 1 */
        position: absolute;
        width: 526px;
        height: 840px;
        left: 0px;
        top: 0px;
        /* Neutral/Grey */
        background: #404555;
    }
</style>
