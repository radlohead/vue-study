<template>
  <section>
    Event child
    <div>{{ title }}</div>
  </section>
</template>

<script>
export default {
  name: "EventChild",
  data() {
    return {
      title: "event child"
    };
  }
};
</script>
