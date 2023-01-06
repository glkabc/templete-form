<template>
  <div
    v-for="item in props.data"
    class="container"
    :key="item.key"
  >
    <ComVue 
      v-if="item.type === 'tool'"
      :data="item"
    />
    
    <el-row
      v-if="item.config.type === 'col'"
      :gutter="20"
    >
      <el-col
        v-for="colItem in item.children"
        :span="getCol(item)"
        :key="colItem.key"
      >
        <ComVue 
          v-if="colItem.type === 'tool'"
          :data="colItem"
        />

        <FormItem
          v-else
          :data="colItem.children"
        />
      </el-col>
    </el-row>

    <el-card
      v-if="item.config.type === 'card'"
    >
      <FormItem :data="item.children" :key="item.key" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
  import { ViewListType } from '../../store/type';
  import ComVue from '../Com.vue';
  import { IRowLayout } from '../layout/type';
  import FormItem from './index.vue';

  const props = defineProps<{
    data: ViewListType[];
  }>()

  const getCol = (data: ViewListType) => {
    const config = data.config as IRowLayout
    return config.col
  }
</script>

<style lang="scss" scoped>
.container {
  margin: 20px 0px;
}
</style>