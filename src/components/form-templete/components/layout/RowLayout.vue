<template>
  <el-row
    :gutter="props.gutter"
    :class="['layout-row', isCurrent ? 'current' : '']"
  >
    <div class="row_bar" @click="setCurrent(props.index, props.data)">
      <CloseBold
        class="icon"
        style="width: 1em; height: 1em; margin-right: 8px"
        @click="handleClickDel"
      />grid 布局
    </div>
    <draggable
      :model-value="props.data.children"
      group="people"
      class="dragArea el-row"
      item-key="id"
      @change="(payload) => dragSet(payload, props.data.children)"
    >
      <template #item="{ element, index }">
        <el-col
          :span="props.data.config.col ?? 24"
          class="layout-col"
        >
          <Center
            v-if="element.type === 'layoutTool'"
            :data="[element]"
            :current-editor="props.currentEditor"
          />

          <slot 
            v-else
            name="item"
            v-bind="{data: element, key: index}"
          />
        </el-col>
      </template>
    </draggable>
  </el-row>
</template>

<script lang="ts" setup>
  import { ViewListType } from '../../store/type';
  import draggable from "vuedraggable";
  import Center from '../Center/index.vue';
  import { IRowLayout } from './type';
  import { computed } from 'vue';

  const props = defineProps<{
    gutter?: {
      type: number,
      default: () => 10
    },
    index: number,
    data: ViewListType<IRowLayout>,
    currentEditor: ViewListType | null
  }>()
  const emits = defineEmits<{
    (e: 'handleClickDel'): void
    (e: 'setCurrent', index: number, data?: ViewListType<IRowLayout> | ViewListType[]): void
    (e: 'dragSet', payload: any, data?: ViewListType[]): void
  }>()

  const handleClickDel = () => {
    emits('handleClickDel')
  }

  const setCurrent = (index: number, data?: ViewListType<IRowLayout> | ViewListType[]) => {
    emits('setCurrent', index, data)
  }

  const dragSet = (payload: any, data?: ViewListType[]) => {
    emits('dragSet', payload, data)
  }

  const isCurrent = computed(() => {
    return props.data.key === props.currentEditor?.key
  })
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
    .dragArea {
      width: 100%;
      height: 100%;
    }
    &.current {
      border: 1px solid red;
    }
  }
</style>