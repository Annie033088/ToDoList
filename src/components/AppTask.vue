<template>
  <div
    :key="task.id"
    class="task"
    :class="[
      task.reminder === true ? 'reminder' : '',
      task.completed === true ? 'completed' : '',
    ]"
  >
    <div class="checkIcon">
      <font-awesome-icon
        v-if="!task.completed"
        :icon="iconCircle"
        @click.stop="$emit('toggleCompleted')"
        class="iconCircle"
      />
      <font-awesome-icon
        v-else
        :icon="iconCircleCheck"
        @click.stop="$emit('toggleCompleted')"
        class="iconCircleCheck"
      />
    </div>

    <div class="taskContainer">
      <div class="taskTitle">
        <h3 v-if="!editTextFlag" @click.stop="openEditText">
          {{ task.text }}
        </h3>
        <div v-else>
          <input
            class="inputBox"
            v-model="text"
            @keyup.enter="saveEditText"
            @keyup.esc="cancelEdit"
            ref="input"
          />
          <font-awesome-icon
            :icon="iconCheck"
            class="iconCheck"
            @click.stop="saveEditText"
          />
        </div>
        <h3>
          <font-awesome-icon
            :icon="iconXmark"
            @click.stop="$emit('deleteTask')"
            class="iconXmark"
          />
        </h3>
      </div>

      <div class="taskDay">
        <p v-if="!editDayFlag" @click.stop="openEditDay">
          {{ timeToText(task.day) }}
        </p>
        <div v-else>
          <input
            type="datetime-local"
            class="inputBox"
            v-model="day"
            @keyup.enter="saveEditDay"
            @keyup.esc="cancelEdit"
            ref="input"
          />
          <font-awesome-icon
            :icon="iconCheck"
            class="iconCheck"
            @click.stop="saveEditDay"
          />
        </div>
        <h3>
          <font-awesome-icon
            :icon="iconBell"
            @click.stop="$emit('toggleReminder')"
            class="reminderIcon"
          />
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AppTask",
  components: { FontAwesomeIcon },
  props: {
    task: Object,
  },
  data() {
    return {
      iconXmark: faTimes,
      iconCheck: faCheck,
      iconBell: faBell,
      iconCircleCheck: faCircleCheck,
      iconCircle: faCircle,
      text: "",
      day: "",
      minDateTime: "",
      editTextFlag: false,
      editDayFlag: false,
    };
  },
  methods: {
    timeToText(day) {
      if (!day) return "";

      let date = new Date(day);
      let formatter = new Intl.DateTimeFormat("zh-TW", {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      return formatter.format(date);
    },
    openEditText() {
      this.text = this.task.text;
      this.editTextFlag = true;
      this.$nextTick(() => {
        this.$refs.input.focus(); //指定讓元素聚焦
      });
    },
    saveEditText() {
      this.editTextFlag = false;
      if (this.task.text !== this.text) {
        const newTask = this.task;
        newTask.text = this.text;
        this.$emit("editTask", newTask);
      }
    },
    openEditDay() {
      let now = new Date();
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      this.minDateTime = now.toISOString().slice(0, 16);
      this.day = this.task.day;
      this.editDayFlag = true;
      this.$nextTick(() => {
        this.$refs.input.focus(); //指定讓元素聚焦
      });
    },
    saveEditDay() {
      let now = new Date();
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      this.minDateTime = now.toISOString().slice(0, 16);
      this.editDayFlag = false;

      if(this.day < this.minDateTime){
        alert("請輸入正確時間");
        return;
      }

      if (this.task.day !== this.day) {
        const newTask = this.task;
        newTask.day = this.day.replace("T", " ");
        this.$emit("editTask", newTask);
      }
    },
    cancelEdit() {
      this.editDayFlag = false;
      this.editTextFlag = false;
    },
  },
};
</script>

<style scoped>
.iconCircleCheck {
  color: rgb(33, 181, 55);
}

.taskContainer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.task {
  display: flex;
  align-items: center;
}

.iconCheck {
  color: cadetblue;
}

.taskTitle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.iconXmark {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 15px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task.completed {
  background: #def0d0;
}

.task .checkIcon {
  margin-right: 15px;
}

.inputBox {
  margin-right: 5px;
}

.taskDay {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.iconCircle {
  color: slategrey;
}

.reminderIcon {
  color: darkorange;
}

i {
  right: 0px;
}
</style>