<template>
  <div class="addForm" @keyup.enter="submit">
    <div class="formControl">
      <label>請輸入事項</label>
      <input type="text" v-model="text" placeholder="請輸入待辦事項" />
    </div>
    <div class="formControl">
      <label>請輸入日期及時間</label>
      <input
        type="datetime-local"
        v-model="day"
        placeholder="請輸入事件日期"
        :min="minDateTime"
      />
    </div>

    <div class="formControlCheck formControl">
      <label>設定提醒</label>
      <input type="checkbox" v-model="reminder" />
      <div @click="submit" class="btnAddTask btn">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 4H19V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H9M12 15L15 12M15 12L12 9M15 12H5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      minDateTime: "",
      reminder: false,
      validDay: false,
      validText: false,
    };
  },
  computed: {
    verificationResult() {
      return this.validDay && this.validText;
    },
  },
  methods: {
    submit() {
      let now = new Date();
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      this.minDateTime = now.toISOString().slice(0, 16);

      if (!this.verificationResult || this.day < this.minDateTime) {
        this.$emit("badValue");
        return;
      }

      let newTask = {
        id: crypto.randomUUID(), //使用 json server 則不需要主動設定 id
        text: this.text,
        day: this.day.replace("T", " "),
        reminder: this.reminder,
        completed: false,
      };
      this.$emit("addTask", newTask);
    },
  },
  watch: {
    text: function (newValue) {
      this.validText = /^.{1,}$/.test(newValue);
    },
    day: function (newValue) {
      this.validDay = /^.{1,}$/.test(newValue);
    },
  },
  created() {
    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    this.minDateTime = now.toISOString().slice(0, 16);
    this.day = this.minDateTime;
  },
};
</script>

<style scoped>
.addForm {
  margin-bottom: 20px;
}

.formControl {
  margin: 15px;
}

.formControl label {
  display: block;
}

.formControl input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.formControlCheck {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.formControlCheckabel {
  flex: 1;
}

.formControlCheck input {
  flex: 2;
  height: 20px;
}

.btnAddTask {
  cursor: pointer;
  opacity: 60%;
}
:hover {
  opacity: 100%;
}
</style>