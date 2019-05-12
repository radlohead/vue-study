<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link to="/event">event</router-link>
      </li>
      <li>
        <router-link to="/event/1">event 1</router-link>
      </li>
      <li>
        <router-link to="/event/2">event 2</router-link>
      </li>
    </ul>
    <my-component></my-component>
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import Event from "./components/Event.vue";

Vue.component("my-component", {
  template: "<div>전역 컴포넌트 입니다.</div>"
});

export default {
  name: "App",
  components: {
    "app-event": Event
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
