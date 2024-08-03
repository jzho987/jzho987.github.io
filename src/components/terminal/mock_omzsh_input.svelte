<script lang="ts">
    import webShell from "./web_shell";

    export let props: {
        name: string,
        user: string,
        dir: string,
        active: boolean,
    };
    export let cmdHistory: string[][] = [];
    export let input: string = "";
    let name = props.name;
    let user = props.user;
    let dir = props.dir;
    let active = props.active;

    const onSubmit = (event: HTMLFormElement | SubmitEvent) => {
        if (input == "clear") {
            cmdHistory = []
            input = ""
            return
        }

        let out = webShell.invoke(input) ?? ""
        console.log(out)
        cmdHistory = [...cmdHistory, [input, out]]
        input = ""
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
                disabled={!active}
                bind:value={input}
                />
        </form>
    </div>
</div>