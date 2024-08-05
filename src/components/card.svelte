<script lang="ts">
    export let props: {
        title: string,
        text: string,
    };
    export let Class: string = "";
    let {
        title,
        text,
    } = props;
</script>

<div class={`${Class} flex flex-col py-1 px-4 bg-zinc-500 rounded drop-shadow text-stone-200 font-extralight`}>
    <div class="flex flex-col">
        <p class="text-xl">{title} :</p>
        <div class="h-0.5 mt-1 bg-stone-300"/>
    </div>
    <p class="text-wrap mt-2 truncate flex-1">{text}</p>
</div>