import { Show, createSignal } from "solid-js";
import type { InfoProject } from "../../type.config";
import { infoConfig } from "../../info.config";
import { iconMap } from "../assets/iconMap";

export function ProjectTemplate() {
	let [projects] = createSignal(infoConfig.projects);
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
		<div class="mb-12">
			<div class="text-xl mb-2.5 flex items-center justify-between">
				<div class="flex items-center">{project().title}</div>
				<Show when={project().repository}>
					<a class="text-sky-700 text-base" href={project().repository}>
						github
						<i class="iconfont icon-pointTo !text-xl"></i>
					</a>
				</Show>
				<Show when={project().subTitle}>
					<div class="text-base text-gray-600">{project().subTitle}</div>
				</Show>
			</div>
			<RenderTechniques techniques={project().techniques} />

			<div class="pt-2.5">
				<ul>
					{project().content.map((text: string, index: number) => (
						<li class="pt-2.5">
							<span class="iconfont text-sky-700 pr-1.5 !text-2xl" class={iconMap[index + 1]}></span>
							<span>{text}</span>
						</li>
					))}
				</ul>
			</div>
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
