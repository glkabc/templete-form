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
	Grid
} from '@element-plus/icons-vue'

const tool: ITool = {
    baseTool: [
        {
            title: '表格',
            type: 'TableCore',
            icon: markRaw(Dish),
		},
		{
			title: '输入框',
			type: 'InputCore',
			icon: markRaw(Compass),
		},
		{
			title: '数字输入框',
			type: 'InputNumberCore',
			icon: markRaw(Position),
		},
		{
			title: '多选框',
			type: 'checkboxGroupCore',
			icon: markRaw(FullScreen)
		}
    ],
    layoutTool: [
		{
			title: '栅格布局',
			type: 'col',
			icon: markRaw(Grid)
		}
    ]
}
export default tool