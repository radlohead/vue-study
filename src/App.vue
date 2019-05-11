<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link to="/event">event</router-link>
      </li>
    </ul>
    <app-event v-bind:title="title"></app-event>
    <router-view/>
  </div>
</template>

<script>
import Event from "./components/Event.vue";

export default {
  name: "App",
  components: {
    "app-event": Event
  },
  data() {
    return {
      title: "vuex 없이 상태관리 해보기"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
