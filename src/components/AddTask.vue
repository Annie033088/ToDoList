<template>
  <div class="addForm" @keyup.enter="submit">
    <div class="formControl">
      <label for="">請輸入事項</label>
      <input type="text" v-model="text" placeholder="請輸入待辦事項" />
    </div>
    <div class="formControl">
      <label for="">請輸入日期及時間</label>
      <input
        type="datetime-local"
        v-model="day"
        placeholder="請輸入事件日期"
        :min="minDateTime"
      />
    </div>
    <div class="formControlCheck formControl">
      <label for="">設定提醒</label>
      <input type="checkbox" v-model="reminder" />
    </div>
    <button @click="submit" class="btn">儲存事項</button>
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
      if (!this.verificationResult) return;

      let now = new Date();
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      this.minDateTime = now.toISOString().slice(0, 16);

      if (this.day < this.minDateTime) return;

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
  margin-bottom: 40px;
}

.formControl {
  margin: 20px;
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

.btn {
  width: 100%;
}
</style>