<template>
  <el-row
    :gutter="props.gutter"
    class="layout-row"
    style="padding: 0px; margin: 5px"
  >
    <div class="row_bar">
      <CloseBold
        class="icon"
        style="width: 1em; height: 1em; margin-right: 8px"
        @click="handleClickDel"
      />grid 布局
    </div>
    <el-col :span="24" class="layout-col">
      <slot />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    gutter?: {
      type: number,
      default: () => 20
    }
  }>()
  const emits = defineEmits<{
    (e: 'handleClickDel'): void
  }>()

  const handleClickDel = () => {
    emits('handleClickDel')
  }
</script>

<style lang="scss" scoped>
  .layout-row {
    border: 1px solid rebeccapurple;
    box-sizing: content-box;
    min-height: 150px;
    .row_bar {
      width: 100%;
      height: 20px;
      line-height: 20px;
      padding: 10px;
      margin: 5px;
      background-color: #eee;
    }
    .layout-col {
      padding: 10px;
    }
  }
</style>