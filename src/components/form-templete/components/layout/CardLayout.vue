<template>
  <el-card class="box-card">
    <div class="card-head" @click="setCurrent">
      <CloseBold
        class="icon"
        style="width: 1em; height: 1em; margin-right: 8px"
        @click="handleClickDel"
      /> 
      <el-icon><Folder /></el-icon>
      Card 布局
    </div>
    <slot />
  </el-card>
</template>

<script lang="ts" setup>
  const emits = defineEmits<{
    (e: 'handleClickDel'): void
    (e: 'setCurrent'): void
  }>()
  const handleClickDel = () => {
    emits('handleClickDel');
  }

  const setCurrent = () => {
    emits('setCurrent')
  }
</script>

<style lang="scss" scoped>
.box-card{
  margin: 10px 5px;
  min-height: 150px;
  .card-head {
    height: 30px;
    line-height: 30px;
    border: 1px solid #eee;
    cursor: pointer;
  }
}
</style>