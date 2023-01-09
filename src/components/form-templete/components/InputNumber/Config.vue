<template>
   <el-form label-position="top">
    <el-form-item label="字段名称">
      <el-input
        :model-value="props.config.formKeyName"
        @input="change"
      />
    </el-form-item>
    <el-form-item label="名称">
      <el-input
        v-model="props.config.formLabel"
        placeholder="请输入"
      />
    </el-form-item>
    <el-form-item label="placeholder">
      <el-input
        v-model="props.config.placeholder"
      />
    </el-form-item>
    <el-form-item label="是否开启验证">
      <el-switch v-model="props.config.required" />
    </el-form-item>
    <el-form-item label="" v-if="props.config.required">
      <el-icon @click="() => changeRules(props.config)"><CirclePlus /></el-icon>
      <el-col :span="24" v-for="(item, index) in props.config.rules">
        <span>验证规则： {{ index + 1 }} <el-icon color="red" @click="changeRules(props.config, index)"><CloseBold /></el-icon> </span>
        <el-input type="textarea" :model-value="JSON.stringify(props.config.rules[index])" @input="(value: string) => changeRules(props.config, index, value)" />
      </el-col>
    </el-form-item>
    <el-form-item label="最小值">
      <el-input-number
        v-model="props.config.min"
      />
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number
        v-model="props.config.max"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { useStore } from '../../hooks';
  import { ViewListType } from '../../store/type';
  import { useComRulesChange } from '../hooks';
  import { InputNumberConfig } from './type';
  const { changeInputFormStatus } = useStore()
  const { changeRules } = useComRulesChange()

  const props = defineProps<{
    config: InputNumberConfig
    data: ViewListType<InputNumberConfig>
  }>()

  const change = (value: string) => {
    changeInputFormStatus(value as string, props.config.formKeyName)
    props.config.formKeyName = value as string
  }
</script>