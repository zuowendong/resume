import { Show, createSignal } from "solid-js";
import type { InfoProject } from "../../type.config";

export function ProjectTemplate(props: any) {
	let [projects] = createSignal(props.projects);
	return (
		<div class="mt-2">
			{projects().map((project: InfoProject) => (
				<ProjectItem project={project}></ProjectItem>
			))}
		</div>
	);
}

function ProjectItem(props: any) {
	let [project] = createSignal(props.project);
	return (
		<div class="mb-3.5">
			<div class="text-xl mb-2.5 flex items-center justify-between">
				<div class="flex items-center">
					<span class="iconfont icon-num_one text-sky-700 pr-1.5 !text-2xl"></span>
					Current Resume Project
				</div>
				<Show when={project().repository}>
					<a class="text-sky-700 text-base" href={project().repository}>
						github
						<i class="iconfont icon-pointTo !text-xl"></i>
					</a>
				</Show>
			</div>
			<RenderTechniques techniques={project().techniques} />

			<div class="pt-2.5">{project().content}</div>
		</div>
	);
}

function RenderTechniques(props: any) {
	let [techniques] = createSignal(props.techniques);

	let [isObjArr, setIsObjArr] = createSignal(false);
	const type = Object.prototype.toString.apply(techniques()[0]);
	if (type === "[object Object]") {
		setIsObjArr(!isObjArr());
	} else if (type === "[object String]") {
		setIsObjArr(isObjArr());
	}

	return (
		<div>
			The techniques used：
			<Show when={isObjArr()}>
				{techniques().map((technique: any) => {
					return (
						<a class="text-sky-700" href={technique.url}>
							<i>{technique.label}</i>
							<i>，</i>
						</a>
					);
				})}
			</Show>
			<Show when={!isObjArr()}>
				{techniques().map((technique: any) => {
					return (
						<span>
							<i>{technique}</i>
							<i>，</i>
						</span>
					);
				})}
			</Show>
		</div>
	);
}
