<template>
  <div>
    <AddTask @addTask="addTask" v-if="showAddTaskFlag" />
    <AppTasks
      :tasks="tasks"
      @deleteTask="deleteTask"
      @toggleReminder="toggleReminder"
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
    async deleteTask(id) {
      if (confirm("確定刪除?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        // alert("Error deleting task");
      }
    },
    async toggleReminder(id) {
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
    async addTask(newTask) {
      try {
        this.tasks = [...this.tasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      } catch (error) {
        console.error("Error adding task:", error);
      }
    },
  },
  created() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  },
};
</script>