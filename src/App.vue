<template>
  <div>
    <transition name="fade">
      <AppToast v-if="showToastFlag"></AppToast>
    </transition>
    <div class="container">
      <AppHeader
        title="ToDo List"
        @switchAddTaskForm="switchAddTaskForm"
        :showAddTaskFlag="showAddTaskFlag"
      ></AppHeader>
      <router-view
        :showAddTaskFlag="showAddTaskFlag"
        @switchAddTaskForm="switchAddTaskForm"
        @badValue="triggerToast"
      ></router-view>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter.vue";
import AppToast from "@/components/AppToast.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppToast,
  },
  data() {
    return {
      tasks: [],
      showAddTaskFlag: false,
      showToastFlag: false,
      toggleToastImg: false,
    };
  },
  methods: {
    async triggerToast() {
      this.showToastFlag = true;
      setTimeout(() => {
        this.showToastFlag = false;
      }, 3000);
    },
    switchAddTaskForm() {
      this.showAddTaskFlag = !this.showAddTaskFlag;
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

.btn:active {
  transform: scale(0.9);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
  transform: translateY(0);
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 2s ease;
}
</style>