<template>
  <div class="btn">
    <button @click="handleButtonClick">我是按钮</button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleButtonClick () {
        console.log('click..fdsa.')
      }
    }
  }
</script>

<style scoped>
.btn {
  margin: 0;
  padding: 0;
}
</style>