<template>
  <div class="hello">
    <h2>{{ title }}</h2>
    <a v-bind:href="testUrl">test link</a>
    <p v-html="testUrlLink"></p>
    <input type="text" v-model="message">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String
  },
  data() {
    return {
      message: "watch input test",
      testUrl: "https://www.naver.com",
      testUrlLink: "<a href='https://www.naver.com'>test url link</a>"
    };
  },
  watch: {
    message(data) {
      console.log(`'message의 값이 바뀝니다.' ${data}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
