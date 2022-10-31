import { createSignal } from "solid-js";

export function Counter(props: any) {
	const [count, setCount] = createSignal(props.count);

	return (
		<div>
			counter {count()}
			<button onclick={() => setCount(count() + 1)}>增加</button>
		</div>
	);
}
