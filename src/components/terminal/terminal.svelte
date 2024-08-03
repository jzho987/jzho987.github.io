<script lang="ts">
	import MockMacActionButtons from "./mock_mac_action_buttons.svelte";
	import MockOmzshInput from "./mock_omzsh_input.svelte";

    export let props: {
        name: string,
        user: string,
        dir: string,
    };
    let name = props.name;
    let user = props.user;
    let dir = props.dir;

    // 1st dim: nth command
    // 2nd dim: cmd/ output
    let cmdHistory: string[][] = [];

</script>

<div class="flex flex-col flex-1">
    <div class="rounded-t-lg bg-stone-200 p-2 flex flex-row items-center">
        <MockMacActionButtons />
        <div class="flex flex-1 justify-center">
            <p class="text-sm text-gray-800">{user}@{name}:{dir}</p>
        </div>
    </div>
    <div class="flex-1 rounded-b-lg bg-stone-800 p-3">
        {#each cmdHistory as cmd}
            <MockOmzshInput
                props={{
                    user: user,
                    name: name,
                    dir: dir,
                    active: true,
                }}
                input={cmd[0]}
            />
            <p class="flex flex-row text-sm font-extralight text-stone-300">{cmd[1]}</p>
        {/each}
        <MockOmzshInput
			props={{
				user: user,
				name: name,
				dir: dir,
                active: true,
			}}
            bind:cmdHistory={cmdHistory}
        />
    </div>
</div>
