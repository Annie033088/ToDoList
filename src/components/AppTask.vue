<template>
  <div
    :key="task.id"
    class="task"
    :class="[task.reminder === true ? 'reminder' : '']"
  >
    <div class="completeIcon">
      <div class="btn" v-if="!task.completed" @click.stop="$emit('toggleCompleted')">
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9984 29.0152C9.188 28.4198 5.80267 25.8321 4.08835 23.3206C2.37403 20.809 1.39317 16.9696 1.71248 13.9459C2.03179 10.9222 3.83027 7.3322 6.00421 5.17834C8.17815 3.02448 11.7698 1.20358 14.7561 1.02276C17.7424 0.841938 21.4453 2.30345 23.9221 4.09343C26.3988 5.8834 28.8361 8.85168 29.6168 11.7626C30.3974 14.6736 29.9485 18.8486 28.6059 21.5591C27.2633 24.2696 24.9681 27.0156 21.561 28.0258C18.1538 29.036 10.8042 28.1639 8.16313 27.6202C5.52202 27.0765 5.53393 24.9657 5.71428 24.7637M11.4185 28.4873C8.47107 27.8234 5.18916 25.0769 3.47035 22.6258C1.75155 20.1746 0.701003 16.6725 1.10569 13.7805C1.51038 10.8886 3.66676 7.34232 5.89848 5.27396C8.1302 3.2056 11.3617 1.63448 14.496 1.37035C17.6303 1.10622 22.1746 1.88828 24.7042 3.68919C27.2337 5.49009 29.1058 9.21777 29.6733 12.1758C30.2408 15.1338 29.4628 18.7399 28.1091 21.4374C26.7554 24.1348 24.2595 27.155 21.5509 28.3604C18.8422 29.5658 13.4887 28.5715 11.8573 28.6696C10.2258 28.7676 11.8205 29.146 11.7624 28.9489"
            stroke="black"
          />
        </svg>
      </div>
      <div class="btn" v-else @click.stop="$emit('toggleCompleted')">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.5382 28.958C24.9761 27.2195 26.4695 23.93 30.2128 21.149M21.807 29.4736C24.0341 27.2774 26.4352 24.7775 29.9702 21.0301M19.1 30.8113C22.6814 27.4133 24.605 24.7585 30.8296 19.0567M19.7994 30.4144C23.2853 26.541 27.2213 22.3043 30.4404 18.841M17.9022 30.6808C22.1354 26.5269 25.1788 22.335 30.9582 16.417M17.6812 30.9797C20.6595 27.5121 23.6399 24.2044 30.8482 16.8571M16.4413 30.3636C19.2558 26.9556 22.5464 23.1465 30.1007 15.2721M16.1879 31.0152C21.5497 24.7743 27.2766 18.8701 30.4506 15.1743M14.018 30.6581C19.1873 26.5823 23.3696 21.3653 29.996 13.5391M14.4415 30.7801C19.6816 25.1179 25.171 19.3112 30.6441 13.7101M13.6899 30.3441C16.041 26.9547 19.994 22.7253 29.5736 11.6546M13.4022 30.4572C17.3266 25.9581 21.7887 21.488 30.1566 12.057M11.6702 30.7682C17.9454 23.6179 25.3026 16.879 29.5595 11.2406M11.9516 30.4722C16.2777 25.3241 21.0712 20.2705 29.7584 11.1478M10.8609 29.7484C14.1003 25.4674 18.9164 21.2661 28.626 10.0642M10.7579 30.0812C15.2338 25.2073 20.0735 19.8177 29.1465 9.76683M9.12344 29.1732C14.8823 23.0202 20.7226 16.7111 28.2071 8.39698M9.33306 29.2111C15.3187 22.8096 21.5493 16.7838 28.5966 8.54776M7.97674 28.9993C14.6558 22.0529 21.4556 15.2014 27.8583 7.27464M8.31212 28.9951C12.7213 24.2838 17.1702 19.9365 27.6841 7.68672M7.92311 28.6113C14.4543 21.4565 20.4642 14.3331 26.6117 6.97577M7.1293 28.2115C11.5118 24.0305 15.6724 18.9709 27.203 6.635M6.50691 27.7537C12.9996 19.79 20.5252 13.0057 26.1975 5.44612M6.6554 27.4324C12.6545 21.1598 19.0042 14.5344 26.3583 5.9043M5.16188 27.3189C10.6326 21.5628 15.6831 16.9571 25.3813 4.80192M5.83286 26.6111C10.169 21.9231 14.3016 17.1177 25.7536 5.24144M4.83803 25.6251C11.3816 19.3458 17.2436 12.3535 24.2209 4.47626M4.67102 25.8694C9.50463 21.2471 13.5918 16.7969 24.9371 4.64917M4.20382 24.9533C8.99567 20.3827 13.8403 15.5373 23.5427 3.31843M3.7615 25.0839C10.4786 18.1402 17.1668 10.7026 23.8298 3.95479M3.29359 24.6534C8.8614 17.5364 15.1733 10.9794 22.2306 3.65144M3.12251 24.1638C10.3982 16.2408 17.9121 8.29115 22.6895 3.37104M2.54279 23.0259C10.5024 14.5941 17.2758 6.84377 21.9289 2.72861M2.61534 23.0037C8.78295 16.8796 14.7845 10.2907 21.4344 2.40413M2.05203 21.9929C6.81043 16.952 11.0606 11.6907 20.8825 2.22476M2.3661 22.0937C5.848 17.419 9.81505 13.1163 20.1279 2.36644M2.2279 21.0262C5.64859 16.1207 9.07822 12.2547 18.6151 2.13029M1.42738 20.6096C5.2029 16.5228 8.82099 13.05 19.2903 2.08364M1.17665 19.609C6.69924 14.3978 12.0089 7.83374 17.8282 1.71586M1.32396 19.7133C7.01459 13.2644 12.3225 7.3813 17.5119 1.65457M1.02551 18.5236C5.28841 13.366 9.26477 9.33538 16.8133 1.0152M1.32185 17.8496C6.24131 11.9462 11.8614 5.76959 16.1218 1.45627M0.962321 16.7335C4.88786 11.4954 9.31378 7.20753 14.8808 1.16548M0.992516 16.4655C4.13747 12.9262 7.87431 8.95594 14.9564 1.80071M1.21105 14.7214C4.48794 11.6382 7.17849 8.08511 12.396 1.70033M0.958159 14.5895C3.41761 12.2417 6.02292 9.77973 12.9784 1.52274M1.45598 12.1745C3.46416 10.2848 5.40181 8.58704 10.5729 2.81918M1.61478 12.4083C4.44535 9.49449 7.39855 6.31662 10.8193 2.29203M2.60998 9.93925C3.1535 8.63122 5.35475 6.51792 8.70451 3.69374M2.42085 9.92624C4.57818 7.48143 6.76141 5.14032 8.18038 3.77295"
            stroke="#B7E7BA"
            stroke-width="0.5"
          />
          <path
            d="M12.0899 29.895C9.2795 29.2997 5.89417 26.712 4.17985 24.2004C2.46554 21.6889 1.48468 17.8494 1.80399 14.8257C2.1233 11.802 3.92178 8.21203 6.09572 6.05817C8.26966 3.90432 11.8613 2.08341 14.8476 1.90259C17.834 1.72177 21.5368 3.18328 24.0136 4.97326C26.4904 6.76324 28.9276 9.73151 29.7083 12.6425C30.4889 15.5534 30.04 19.7284 28.6974 22.439C27.3548 25.1495 25.0596 27.8955 21.6525 28.9056C18.2453 29.9158 10.8958 29.0438 8.25464 28.5001C5.61352 27.9564 5.62543 25.8456 5.80578 25.6435M11.51 29.3671C8.56258 28.7032 5.28067 25.9567 3.56186 23.5056C1.84305 21.0545 0.79251 17.5523 1.1972 14.6604C1.60189 11.7684 3.75827 8.22216 5.98999 6.15379C8.22171 4.08543 11.4532 2.51432 14.5875 2.25019C17.7218 1.98606 22.2662 2.76811 24.7957 4.56902C27.3252 6.36993 29.1973 10.0976 29.7648 13.0556C30.3323 16.0137 29.5544 19.6198 28.2006 22.3172C26.8469 25.0146 24.351 28.0349 21.6424 29.2402C18.9337 30.4456 13.5802 29.4513 11.9488 29.5494C10.3174 29.6475 11.912 30.0258 11.8539 29.8287"
            stroke="black"
          />
        </svg>
      </div>

      <!-- <font-awesome-icon
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
      /> -->
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
            class="iconCheck btn"
            @click.stop="saveEditText"
          />
        </div>
        <h3>
          <font-awesome-icon
            :icon="iconXmark"
            @click.stop="$emit('deleteTask')"
            class="iconXmark btn"
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
            class="iconCheck btn"
            @click.stop="saveEditDay"
          />
        </div>
        <h3>
          <font-awesome-icon
            :icon="iconBell"
            @click.stop="$emit('toggleReminder')"
            class="reminderIcon btn"
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

      if (new Date(this.day) < new Date(this.minDateTime)) {
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
.taskContainer h3, p{
  cursor: pointer;
}
.completeIcon {
  width: 15%;
  height: 15%;
}

.completeIcon img {
  width: 65%;
  height: 65%;
}

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
  border-radius: 10px;
}

.iconCheck {
  cursor: pointer;
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
  background: url('../assets/taskBg.png');
  margin: 5px;
  padding: 10px 15px;
}

.task.reminder {
  border-left: 8px solid green;
  border-image: url("../assets/borderLine.png") 50 stretch;
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

.reminderIcon {
  color: darkorange;
}

i {
  right: 0px;
}
</style>