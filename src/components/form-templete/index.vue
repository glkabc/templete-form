<template>
  <div class="container">
    <Left />
    <Center />
    <Right />
  </div>
</template>

<script setup lang="ts">
  import Left from './layout/Left.vue'
  import Center from './layout/Center.vue'
  import Right from './layout/Right.vue'
</script>

<style scoped lang="scss">
.container {
  display: flex;
}
</style>