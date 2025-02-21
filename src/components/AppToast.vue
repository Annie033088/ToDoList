<template>
  <div class="toast-wrapper">
    <div class="toast" >你必須輸入有效值</div>
  </div>
</template>

<script>
export default {
  name:'AppToast',
}
</script>

<style>
.toast-wrapper {
  position: fixed;
  text-align: center;
  width: 100%;
  top: 20px;
}

.toast {
  padding: 20px;
  color: black;
  background-image: url("../assets/toastBg.gif");
  background-position: center;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 550px;
  margin: 0 auto;
}

</style>