<template>
    <div class="about">
        <div class="header">
            <Header></Header>
        </div>
        <div class="lines"></div>

       <div class="box">
           <div class="left">
               <div class="L-top"><LeftTop></LeftTop></div>
               <div class="L-bottom"><LeftBot></LeftBot></div>
           </div>
           <div class="moddle">
               <div class="M-top"><M_maps></M_maps></div>
               <div class="M-bottom"><MiddleBottom></MiddleBottom></div>
           </div>
           <div class="right"><Rightm></Rightm></div>
       </div>

    </div>
</template>
<script>
  import { mapState } from 'vuex';
  import Header from './Header/index'
  import LeftTop from './left/top'
  import LeftBot from './left/bootom'
  import MiddleBottom from './middle/index'
  import Rightm from './right/index'
  import M_maps from './middle/maps'
  export default {
    data() {
      return {
        state: 1,
      }
    },

    components:{Header,LeftTop,LeftBot,Rightm,M_maps,MiddleBottom},

    created() {
      const { dispatch } = this.$store;
      const payload = {
        'sysVersion': ''
      }
      dispatch('overdueData/getVersion', payload);
      // const ws = new WebSocket("wss://echo.websocket.org");
      // ws.onopen = function(evt) {
      //   console.log("Connection open ...");
      //   ws.send("Hello WebSockets!");
      // };
      // ws.onmessage = function(evt) {
      //   console.log( "Received Message: " + evt.data);
      //   ws.close();
      // };
      // ws.onclose = function(evt) {
      //   console.log("Connection closed.");
      // };
    },
    computed: {
      ...mapState({
        all: _ => _.overdueData.all,
      }),

    },
  }
</script>
<style>
    @import "../assets/css/index.css";
</style>

