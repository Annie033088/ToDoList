<template>
  <h3>{{ dayToText(day) }}</h3>
</template>

<script>
export default {
  name: "AppTaskDay",
  props: {
    day: String,
  },
  methods: {
    dayToText(day) {
      if (!day) return "";
      
      let date = new Date(day);
      let formatter = new Intl.DateTimeFormat("zh-TW", {
        month: "numeric",
        year: "numeric",
        day: "numeric",
        weekday: "long",
        hour12: false,
      });

      return formatter.format(date);
    },
  },
};
</script>
