<template>
  <div class="container">
    <Left />
    <Center />
    <Right />
  </div>
</template>

<script setup lang="ts">
  import Left from './Left.vue'
  import Center from './Center.vue'
  import Right from './Right.vue'
</script>

<style scoped lang="scss">
.container {
  display: flex;
}
</style>