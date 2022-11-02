import { createSignal } from "solid-js";
import { infoConfig } from "../../info.config";
import { ProjectTemplate } from "./projectTemplate";

export function WorkTemplate() {
	const [works] = createSignal(infoConfig.works);
	return (
		<ul>
			{works().map((work) => (
				<WorkItem work={work}></WorkItem>
			))}
		</ul>
	);
}

function WorkItem(props: any) {
	return (
		<li class="mb-4">
			<div class="flex items-center justify-between">
				<h3 class="text-2xl font-medium text-gray-800">{props.work.companyName}</h3>
				<div class="text-1xl text-gray-600">{props.work.timeHorizon}</div>
			</div>
			<ProjectTemplate projects={props.work.projects}></ProjectTemplate>
		</li>
	);
}
