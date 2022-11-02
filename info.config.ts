import type { InfoConfig } from "./type.config";

export const infoConfig: InfoConfig = {
	name: "Jack",
	avatars: "/avatars-jack.png",
	post: "front-end engineer",
	serviceYear: "five years",
	contact: "coolbigflower",
	phoneNum: "17326262626",
	email: "email@163.com",
	address: "Nanjing",
	github: "https://github.com",
	works: [
		{
			companyName: "company AAAA",
			timeHorizon: "21/04 - 至今",
			post: "front-end engineer",
			projects: [
				{
					name: "Current Resume Project",
					techniques: [
						{ label: "Astro", url: "https://astro.build/" },
						{ label: "solidjs", url: "https://www.solidjs.com/" },
						{ label: "tailwindcss", url: "https://tailwindcss.com/" },
					],
					repository: "https://github.com/Zuowendong/resume",
					content: "xxx",
				},
			],
		},
		{
			companyName: "company BBBB",
			timeHorizon: "19/03 - 21/04",
			projects: [
				{
					name: "Latest Resume Project",
					techniques: ["Astro", "solidjs", "tailwindcss"],
					content: "yyy",
				},
			],
		},
	],
};
