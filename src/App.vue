<template>
  <div class="container">
    <AppHeader
      title="ToDo List"
      @switchAddTaskForm="switchAddTaskForm"
      :showAddTaskFlag="showAddTaskFlag"
    ></AppHeader>
    <router-view :showAddTaskFlag="showAddTaskFlag" @switchAddTaskForm="switchAddTaskForm"></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      tasks: [],
      showAddTaskFlag: false,
    };
  },
  methods: {
    switchAddTaskForm() {
       this.showAddTaskFlag = ! this.showAddTaskFlag;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  max-height: 100vh; 
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
