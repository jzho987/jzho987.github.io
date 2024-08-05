<script lang="ts">
    export let props: {
        image: string,
        title: string,
        text: string,
    };
    let {
        image,
        title,
        text,
    } = props;
</script>

<div class="flex flex-row w-full bg-zinc-500 rounded drop-shadow text-stone-200 font-extralight">
    <img class="h-32 w-48 rounded-l object-cover" alt={title} src={image}/>
    <div class="flex flex-col pl-4 pr-10 py-2">
        <p class="text-3xl">{title}</p>
        <p class="text-wrap truncate flex-1">{text}</p>
    </div>
</div>