export interface InfoConfig {
	name: string;
	avatars: string;
	post: string;
	serviceYear: string;
	phoneNum: string;
	email: string;
	github?: string;

	evaluationName: string;
	evaluations: string[];

	experienceName: string;
	experiences: InfoWork[];

	projectName: string;
	projects: InfoProject[];
}

export interface InfoWork {
	companyName: string;
	timeHorizon: string;
	post?: string;
}

export interface InfoProject {
	title: string;
	subTitle?: string;
	techniques: InfoTechniques;
	repository?: string;
	content: string[];
}

type InfoTechniques = string[] | { label: string; url: string }[];
