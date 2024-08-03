<script lang="ts">
    import WebShell from "./web_shell";

    export let props: {
        name: string,
        user: string,
        dir: string,
    };
    export let input: string;
    let name = props.name;
    let user = props.user;
    let dir = props.dir;

    export const onSubmit = (event: HTMLFormElement | SubmitEvent) => {
        let out = WebShell.invoke(input)
        console.log(out)
        input = ''
    }
</script>

<div>
    <div class="flex flex-row text-sm font-extralight">
        <p class="text-purple-500">{user}</p>
        <p class="text-stone-300">&nbsp in &nbsp</p>
        <p class="text-orange-500">{name}</p>
        <p class="text-stone-300">&nbsp at &nbsp</p>
        <p class="text-lime-400">{dir}</p>
    </div>
    <div class="flex flex-row text-sm font-extralight text-stone-300">
        <p>$ &nbsp</p>
        <form on:submit|preventDefault={onSubmit}>
            <input class="bg-red-100 bg-opacity-0 outline-none"
                bind:value={input}
                />
        </form>
    </div>
</div>