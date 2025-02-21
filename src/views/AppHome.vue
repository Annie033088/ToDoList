<template>
  <div>
    <transition name="popup">
    <AddTask @addTask="addTask" v-if="showAddTaskFlag" @badValue = "$emit('badValue')" />
    </transition>
    <AppTasks
      :tasks="tasks"
      @deleteTask="deleteTask"
      @toggleReminder="toggleReminder"
      @toggleCompleted="toggleCompleted"
      @editTask="editTask"
    />
  </div>
</template>

<script>
import AppTasks from "@/components/AppTasks";
import AddTask from "@/components/AddTask";

export default {
  name: "AppHome",
  components: {
    AppTasks,
    AddTask,
  },
  props: {
    showAddTaskFlag: {
      type: Boolean,
    },
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
   
    //使用 json server 的話需要修改此處的增刪修查
    deleteTask(id) {
      if (confirm("確定刪除?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
    },
    toggleReminder(id) {
      try {
        const task = this.tasks.find((task) => task.id === id);

        if (task) {
          task.reminder = !task.reminder;
        }

        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      } catch (error) {
        console.error("Error editing task:", error);
      }
    },
    toggleCompleted(id) {
      const task = this.tasks.find((task) => task.id === id);

      if (task) task.completed = !task.completed;

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    addTask(newTask) {
      try {
        this.tasks = [...this.tasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.$emit("switchAddTaskForm");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    },
    editTask(newTask) {
      let oldTask = this.tasks.find((task) => task.id === newTask.id);
      oldTask.text = newTask.text;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
  created() {
    let version = localStorage.getItem("version");
    
    if (version !== "1.1") {
      localStorage.clear();
      localStorage.setItem("version", "1.1");
    } else {
      this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    }
  },
};
</script>

<style scoped>
.popup-enter, .popup-leave-to {
 opacity: 0;
  transform: translateY(-30px);
}

.popup-enter-active, .popup-leave-active{
    transition: opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>