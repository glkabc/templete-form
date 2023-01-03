<template>
  <el-row
    :gutter="props.gutter"
    class="layout-row"
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

          <!-- <ItemView
            v-else
            :elemet-id="element.config.id"
            :current-editor-element-id="props.currentEditor?.config?.id"
            @handle-click-del="handleClickDel(element, index, props.data)"
            @set-current="setCurrent(index, element)"
          >
            <Com :data="element" :key="element.config.id" />
          </ItemView> -->
        </el-col>
      </template>
    </draggable>
  </el-row>
</template>

<script lang="ts" setup>
  import { ViewListType } from '../../store/type';
  import draggable from "vuedraggable";
  import Center from '../Center/index.vue';
  import Com from "../Com.vue";
  import ItemView from "../Center/ItemView.vue";
  import { IRowLayout } from './type';

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

  const handleClickDel = (element: ViewListType<IRowLayout>, index: number) => {
    emits('handleClickDel')
  }

  const setCurrent = (index: number, data?: ViewListType<IRowLayout> | ViewListType[]) => {
    emits('setCurrent', index, data)
  }

  const dragSet = (payload: any, data?: ViewListType[]) => {
    emits('dragSet', payload, data)
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
    .dragArea {
      width: 100%;
      height: 100%;
    }
  }
</style>