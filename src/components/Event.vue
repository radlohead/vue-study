<template>
  <section class="wrapper">
    wrapper
    <h1>{{ title }}</h1>
    <h2>{{ num }}</h2>
    <my-component></my-component>
  </section>
</template>

<script>
const Child = {
  template: "<div>지역 컴포넌트 입니다.</div>"
};

export default {
  name: "Event",
  props: {
    title: String,
    num: String
  },
  components: {
    "my-component": Child
  }
};
</script>
