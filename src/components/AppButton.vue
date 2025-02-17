<template>
  <button class="btn" :style="{background: color}" @click="$emit('switchAddTaskForm')">{{text}}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    text: String,
    color: String,
  },
};
</script>
