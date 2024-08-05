<script lang="ts">
    import { colors } from "../style/colors";

    export let props: {
        text: string,
        onClick: () => void,
    };
    let {
        text,
        onClick,
    } = props;
</script>

<button class={`w-full justify-center transition-all duration-100 bg-zinc-500 hover:bg-gray-700 flex flex-1 p-1 rounded text-stone-200 text-xl font-extralight`}
    on:click={onClick}>
    {text}
</button>