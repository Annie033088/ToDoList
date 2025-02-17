<template>
  <footer>
    <p>TDL &copy; 2025</p>
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
a {
  color: #333;
}
footer {
  margin-top: 30px;
  text-align: center;
}
</style>