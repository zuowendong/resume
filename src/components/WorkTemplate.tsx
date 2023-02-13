import { createSignal } from "solid-js";
import { infoConfig } from "../../info.config";

export function WorkTemplate() {
	const [works] = createSignal(infoConfig.experiences);
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
			<div class="flex flex-col md:flex-row">
				<div class="text-xl font-medium text-gray-800 flex-1">{props.work.companyName}</div>
				<div class="text-base text-gray-600">{props.work.timeHorizon}</div>

				<div class="text-base text-gray-600 ml-10 hidden md:block">{props.work.post}</div>
			</div>
		</li>
	);
}
