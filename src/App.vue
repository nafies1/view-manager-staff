<template>
  <v-app id="bg-none">
    <n-navbar />
    <notifications group="sign" position="top left" :width="600"/>
      <v-content style="margin-bottom: 4rem">
        <Home />
      </v-content>
      <n-footer />
  </v-app>
</template>{

<script>
import nNavbar from './components/Navbar'
import nFooter from './components/Footer'
import Home from './views/Home'
export default {
  name: 'App',
  components: {
    nNavbar,
    nFooter,
    Home
  },
  methods: {
    checkLogin () {
    }
  },
  created () {
  }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
  .hvr {
    transition: transform 10s
  }
  .hvr:active {
    background-color: blue;
  }
  .ophvr {
    transition: opacity .4s ease-in-out;
  }
  .ophvr:hover {

    opacity: 0.6;
  }
  /* .ovl-hd {
    overflow: auto;
  } */
  #bg-none {
    background: none;
  }
</style>
