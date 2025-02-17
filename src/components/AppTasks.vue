<template>
  <div>
    <div :key="task.id" v-for="(task) in tasks">
      <AppTask :task="task"  @deleteTask="$emit('deleteTask', task.id)" @toggleReminder="$emit('toggleReminder', task.id)" />
    </div>
  </div>
</template>

<script>
import AppTask from "./AppTask.vue"; 

export default {
  name: "AppTasks",
  components: {
    AppTask,
  },
  props: {
    tasks: Array,
  }
};
</script>