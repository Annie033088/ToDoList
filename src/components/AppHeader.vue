<template>
  <header>
    <div class="imgContainer">
      <router-link to="/" class="imgContainer">
        <img class="btn" alt="cute logo" src="../assets/cat.png" />
      </router-link>
    </div>
    <div class="titleContainer">
      <router-link to="/" class="title">
        <h1 class="btn">{{ title }}</h1>
      </router-link>
      <AppButton
        v-if="homePage"
        :showAddTaskFlag="showAddTaskFlag"
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
header .title {
  text-decoration: none;
  color: inherit;
}

header {
  border-bottom: 2px solid grey;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(182, 170, 170, 0.3);
  margin-bottom: 20px;
  border-radius: 5px;
}

header .imgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
}

header img {
  height: 15%;
  width: 15%;
}

header .titleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>
