<script lang="ts">
	import DivideLine from "./divide_line.svelte";

    export let props: {
        src: string,
        label: string,
    };
    export let Class: string = "";
    let {
        src,
        label,
    } = props;
</script>

<div class={`${Class} flex flex-col p-3 bg-zinc-500 rounded drop-shadow`}>
    <div class="flex size-44 overflow-hidden rounded">
        <img alt={label} src={src} />
    </div>
    <div class="flex flex-1 items-center">
        <p class="text-xl text-stone-200 font-extralight">{label}</p>
    </div>
</div>