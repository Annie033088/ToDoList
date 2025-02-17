<template>
  <div
    :key="task.id"
    class="task"
    :class="[task.reminder == true ? 'reminder' : '']"
    @click="$emit('toggleReminder')"
  >
    <h3>
      {{ task.text }}
      <font-awesome-icon
        :icon="icon"
        @click.stop="$emit('deleteTask')"
        class="far"
      />
    </h3>
    <p>
      {{ task.day }}
    </p>
  </div>
</template>

<script>
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "AppTask",
  components: { FontAwesomeIcon },
  props: {
    task: Object,
  },
  data() {
    return {
      icon: faTimes,
    };
  },
};
</script>

<style scoped>
.far {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

i {
  right: 0px;
}
</style>