<template>
  <h3>{{ isTodayFlag ? "今日" : dayToText(day) }}</h3>
</template>

<script>
export default {
  name: "AppTaskDay",
  props: {
    day: String,
  },
  data() {
    return {
      isTodayFlag: false,
    };
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
  created() {
    let currentDate = new Date();

    let formatter = new Intl.DateTimeFormat("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour12: false,
    });
    currentDate = formatter.format(currentDate).replace(/\//g, "-");

    if(this.day === currentDate){
      this.isTodayFlag = true;
      return;
    }
  },
};
</script>
