<template>
  <header>
    <div class="imgContainer">
      <img alt="cute logo" src="../assets/cat.png" />
    </div>
    <div class="titleContainer">
      <h1>{{ title }}</h1>
      <AppButton
        v-if="homePage"
        :text="showAddTaskFlag ? 'Close' : 'Add Task'"
        :color="showAddTaskFlag ? 'Red' : 'green'"
        @switchAddTaskForm="$emit('switchAddTaskForm')"
      />
    </div>
  </header>
</template>

<script>
import AppButton from "./AppButton";

export default {
  name: "AppHeader",
  components: { AppButton },
  props: {
    title: String,
    showAddTaskFlag: Boolean,
  },
  computed: {
    homePage() {
      if (this.$route.path !== "/about") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  margin-bottom: 20px;
}

header .imgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

header img {
  height: 30%;
  width: 30%;
}

header .titleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>
