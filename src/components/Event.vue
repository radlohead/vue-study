<template>
  <section class="wrapper">
    wrapper
    <h1>{{ title }}</h1>
    <h2>{{ num }}</h2>
  </section>
</template>

<script>
export default {
  name: "Event",
  props: {
    title: String,
    num: String
  }
};
</script>
