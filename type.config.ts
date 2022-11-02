export interface InfoConfig {
	name: string;
	avatars: string;
	post: string;
	serviceYear: string;
	contact: string;
	phoneNum: string;
	email: string;
	address: string;
	github?: string;
	works: InfoWork[];
}

export interface InfoWork {
	companyName: string;
	timeHorizon: string;
	post?: string;
	projects: InfoProject[];
}

export interface InfoProject {
	name: string;
	techniques: InfoTechniques;
	repository?: string;
	content: string;
}

type InfoTechniques = string[] | { label: string; url: string }[];
