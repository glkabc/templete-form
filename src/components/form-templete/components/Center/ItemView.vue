<template>
  <div
    :class="['item', props.elemetId === props.currentEditorElementId ? 'current' : '']"
    @click="setCurrent"
  >
    <div>
      <el-icon><component :is="props.icon" /></el-icon>
      <CloseBold
        class="icon"
        style="width: 1em; height: 1em; margin-right: 8px"
        @click="handleClickDel"
      />
    </div>
    <el-form-item :label="props.elemetId">
      <slot />
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    icon?: any,
    elemetId: string,
    currentEditorElementId?: string
  }>()

  const emits = defineEmits<{
    (e: 'handleClickDel'): void,
    (e: 'setCurrent'): void
  }>()

  const handleClickDel = () => {
    emits('handleClickDel')
  }

  const setCurrent = () => {
    emits('setCurrent')
  }
</script>

<style lang="scss" scoped>
  .item {
    border: 1px solid #eee;
    padding: 10px;
    margin: 5px;
    cursor: grab;
    user-select: none;
    .icon {
      width: 30px;
      height: 20px;
      cursor: auto;
    }
  }
  .current {
    border: 1px solid red;
  }
</style>