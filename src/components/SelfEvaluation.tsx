import { infoConfig } from "../../info.config";
import { iconMap } from "../assets/iconMap";

export function SelfEvaluation() {
	return (
		<ul>
			{infoConfig.evaluations.map((text, index) => (
				<li class="text-xl text-gray-600 my-2">
					<span class="iconfont text-sky-700 pr-1.5 !text-2xl" class={iconMap[index + 1]}></span>
					<span>{text}</span>
				</li>
			))}
		</ul>
	);
}
