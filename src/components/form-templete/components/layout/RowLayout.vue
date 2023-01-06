<template>
  <el-row
    :gutter="props.gutter"
    :class="['layout-row', isCurrent ? 'current' : '']"
  >
    <div class="row_bar" @click="() => setCurrent(0, props.data)">
      <CloseBold
        class="icon"
        style="width: 1em; height: 1em; margin-right: 8px"
        @click="handleClickDel(props.data, props.index)"
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
          <Layout
            v-if="element.type === 'layoutTool'"
            :data="element"
            :key="index"
            :index="index"
            :current-editor="props.currentEditor"
            :parent-data="props.data.children"
            @handle-click-del="handleClickDel(element, index, props.data.children)"
            @set-current="setCurrent(index, element)"
          />
          <ItemView
            v-else
            :elemet-id="element.config.id"
            :current-editor-element-id="props.currentEditor?.config?.id"
            @handle-click-del="handleClickDel(element, index, props.data.children)"
            @set-current="setCurrent(index, element)"
          >
            <Com :data="element" :key="element.config.id" />
          </ItemView>
        </el-col>
      </template>
    </draggable>
  </el-row>
</template>

<script lang="ts" setup>
  import { ViewListType } from '../../store/type';
  import draggable from "vuedraggable";
  import Com from "../Com.vue";
  import ItemView from "../Center/ItemView.vue";
  import Layout from './index.vue';
  import { IRowLayout } from './type';
  import { computed } from 'vue';
  import { useDragSet, useSetCurrent } from '../../hooks';

  const { setCurrent } = useSetCurrent()
  const { dragSet } = useDragSet()

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
    (e: 'handleClickDel', data: ViewListType, index: number, source?: ViewListType[]): void
    (e: 'dragSet', payload: ViewListType, data?: ViewListType[]): void
  }>()

  const handleClickDel = (data: ViewListType, index: number, source?: ViewListType[]) => {
    emits('handleClickDel', data, index, source)
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
    margin: 10px 5px;
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
      min-height: 100px;
      height: 100%;
    }
    &.current {
      border: 1px solid red;
    }
  }
</style>