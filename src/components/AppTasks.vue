<template>
  <div>
    <div :key="taskByDay.day" v-for="taskByDay in tasksByDay">
      <div>
        <AppTaskDay :day="taskByDay.day"></AppTaskDay>
      </div>
      <div :key="task.id" v-for="task in taskByDay.tasks">
        <AppTask
          :task="task"
          @deleteTask="$emit('deleteTask', task.id)"
          @toggleReminder="$emit('toggleReminder', task.id)"
          @toggleCompleted="$emit('toggleCompleted', task.id)"
          @editTask="editTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppTask from "./AppTask.vue";
import AppTaskDay from "./AppTaskDay.vue";

export default {
  name: "AppTasks",
  components: {
    AppTask,
    AppTaskDay,
  },
  props: {
    tasks: Array,
  },
  methods: {
    editTask(newTask) {
      this.$emit("editTask", newTask);
    },
    getDateNumber(dateString) {
      return dateString.split(" ")[0];
    },
  },
  computed: {
    tasksByDay() {
      if (this.tasks.length === 0) return [];

      let tempTasks = [...this.tasks];

      //此為按照日期分類的任務的 物件(物件：{時間, 此時間分類下的任務})
      let tasksByDay = [
        { day: this.getDateNumber(tempTasks[0].day), tasks: [tempTasks[0]] },
      ];

      for (let i = 1; i < tempTasks.length; i++) {
        let alreadyAddThisTask = false;
        let tempDateNumber = this.getDateNumber(tempTasks[i].day);

        //迴圈做了兩件事情
        //1. 判斷是否已經有這個日期分類
        //2. 並以升序進行排序 (若新任務的日期比分類中的某個任務小, 且沒有此日期分類, 則在此處插入新的日期分類及對應任務)
        outerLoop: for (let j = 0; j < tasksByDay.length; j++) {
          let tasksByDayDateNumber = this.getDateNumber(tasksByDay[j].day);

          //如果說已經有這個日期的分類的話, 就將任務加入此日期分類底下
          if (tempDateNumber === tasksByDayDateNumber) {
            alreadyAddThisTask = true;

            //同日期的話就進行當日時間排序
            for (let k = 0; k < tasksByDay[j].tasks.length; k++) {
              if (
                tasksByDay[j].tasks[k].day.split(" ")[1] >
                tempTasks[i].day.split(" ")[1]
              ) {
                tasksByDay[j].tasks.splice(k, 0, tempTasks[i]);
                break outerLoop;
              }
            }

            tasksByDay[j].tasks.push(tempTasks[i]);
            break;
          }

          //如果這個日期分類比較小的話, 就另開一個日期分類並, 將任務加入此日期分類底下
          if (tasksByDayDateNumber > tempDateNumber) {
            alreadyAddThisTask = true;
            let newTaskByDay = {
              day: tempDateNumber.toString(),
              tasks: [tempTasks[i]],
            };
            tasksByDay.splice(j, 0, newTaskByDay);
            break;
          }
        }

        if (!alreadyAddThisTask) {
          tasksByDay.push({
            day: tempDateNumber.toString(),
            tasks: [tempTasks[i]],
          });
        }
      }

      return tasksByDay;
    },
  },
};
</script>