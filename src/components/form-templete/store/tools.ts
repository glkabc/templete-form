/**
 * 左侧工具栏配置
 */

import { markRaw } from 'vue'
import { ITool } from "./type"
import {
	Compass,
	Dish,
	Position,
	FullScreen,
	Grid,
	CreditCard
} from '@element-plus/icons-vue'

const tool: ITool = {
  baseTool: [
		{
			title: '表格',
			type: 'TableCore',
			toolType: 'tool',
			icon: markRaw(Dish),
		},
		{
			title: '输入框',
			type: 'InputCore',
			toolType: 'tool',
			icon: markRaw(Compass),
		},
		{
			title: '数字输入框',
			type: 'InputNumberCore',
			toolType: 'tool',
			icon: markRaw(Position),
		},
		{
			title: '多选框',
			type: 'checkboxGroupCore',
			toolType: 'tool',
			icon: markRaw(FullScreen)
		}
  ],
	layoutTool: [
		{
			title: '栅格布局',
			type: 'col',
			toolType: 'layoutTool',
			icon: markRaw(Grid)
		},
		{
			title: '卡片布局',
			type: 'card',
			toolType: 'layoutTool',
			icon: markRaw(CreditCard)
		}
	]
}
export default tool