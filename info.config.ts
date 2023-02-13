import type { InfoConfig } from "./type.config";

export const infoConfig: InfoConfig = {
	name: "wendZzoo",
	avatars: "/resume/assets/resume.jpg",
	post: "前端开发工程师",
	serviceYear: "5年",
	phoneNum: "xxx",
	email: "xxx@163.com",
	github: "https://github.com/Zuowendong",

	evaluationName: "自我评价",
	evaluations: [
		"有前端团队带队经验，注重前端标准化，在部门内部推行 Gitflow, ESLint , Commitlint 以及标准落地。",
		"熟练掌握 HTML5, ES6, CSS3, Vue 系列技术栈。",
		"有大型 ToB 管理平台开发经验, 有组件库搭建开发经验，对前端可视化, 低代码有一定的思考和实践。",
		"了解Linux, Docker基本使用, 在目前部门使用Nexus, Verdaccio搭建了npm私服。",
		"喜欢分享有开源经验，推动团队内部技术分享，工作认真注重效率，在目前公司获得年度优秀员工。",
	],

	experienceName: "工作经历",
	experiences: [
		{ companyName: "xx公司", timeHorizon: "22/04 - 至今", post: "前端组长" },
		{ companyName: "xx公司", timeHorizon: "18/06 - 21/04", post: "前端开发工程师" },
	],

	projectName: "项目经验",
	projects: [
		{
			title: "xxx管理平台",
			subTitle: "22/04 - 至今",
			techniques: [
				{ label: "Vue3", url: "https://cn.vuejs.org/" },
				{ label: "Vite", url: "https://vitejs.cn/guide/" },
				{ label: "Element Plus", url: "https://element-plus.org/zh-CN/" },
				{ label: "ECharts", url: "https://echarts.apache.org/zh/index.html" },
				{ label: "Sass", url: "https://sass-lang.com/" },
			],
			content: [
				"业务系统过多需要制定接入规范并对业务系统问题分类、整理并进行能力输出",
				"项目经过多次微前端选型改造，需要针对不同选型做工程化定制方案",
				"表格表单页面需求类似，基于 Element Plus 封装业务组件，统一视觉风格和交互体验，提高开发效率并在部门推广应用到其他 5+个项目",
			],
		},
		{
			title: "xxx组件库",
			subTitle: "19/10 - 22/04",
			techniques: [
				{ label: "LitElement", url: "https://lit.dev/" },
				{ label: "TypeScript", url: "https://www.typescriptlang.org/" },
				{ label: "Less", url: "https://lesscss.org/" },
			],
			content: [
				"主导组件开发和维护, 深度定制基于xxx务特征的 UI 组件和业务组件, 参与组件量达 50+",
				"跨团队协作开发，将其他团队的第三方库集成封装组件",
			],
		},
		{
			title: "大屏可视化设计器 (个人开源)",
			repository: "https://github.com/Zuowendong/visual-designer",
			techniques: [
				{ label: "Vue3", url: "https://cn.vuejs.org/" },
				{ label: "Vite", url: "https://cn.vitejs.dev/" },
				{ label: "TypeScript", url: "https://www.typescriptlang.org/" },
				{ label: "tailwindcss", url: "https://tailwindcss.com/" },
				{ label: "Less", url: "https://lesscss.org/" },
			],
			content: [
				"pnpm 实现 monorepo 架构, 抽离可视化组件库@visual-designer/components, 搭建脚手架@visual-designer/cli 快速生成组件模板, service 子包是用 Koa 搭建的 node 服务",
				"异步加载组件, 画布中支持组件拖拽动态改变样式, 右侧属性栏获取组件暴露属性进行更新",
				"使用 ace-builds 插件封装编辑器, 表单容器组件支持拖入常规表单项组件, 利用 node 服务解析数据生成内置表单代码模板",
				"@visual-designer/components 组件库, 支持封装第三方组件如 ElementUI, ECharts, 基于vite 包模式打包支持全量导出, 按需引入",
				"原生 node 搭建脚手架@visual-designer/cli, 使用 EJS 编写模板代码",
				"个人云服务器上使用 Ngnix 部署前端项目, 使用 pm2 守护 node 项目",
			],
		},
		{
			title: "个人简历 (当前简历)",
			repository: "https://github.com/Zuowendong/resume",
			techniques: [
				{ label: "Astro", url: "https://astro.build/" },
				{ label: "solidjs", url: "https://www.solidjs.com/" },
				{ label: "tailwindcss", url: "https://tailwindcss.com/" },
			],
			content: ["探索新鲜技术, 赋能工作"],
		},
	],
};
