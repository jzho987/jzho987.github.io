<script lang="ts">
	import MockMacActionButtons from "./mock_mac_action_buttons.svelte";
	import MockOmzshInput from "./mock_omzsh_input.svelte";

    export let props: {
        name: string,
        user: string,
        dir: string,
    };
    export let input = "";
    let name = props.name;
    let user = props.user;
    let dir = props.dir;
</script>

<div class="flex flex-col flex-1">
    <div class="rounded-t-lg bg-stone-200 p-2 flex flex-row items-center">
        <MockMacActionButtons />
        <div class="flex flex-1 justify-center">
            <p class="text-sm text-gray-800">{user}@{name}:{dir}</p>
        </div>
    </div>
    <div class="flex-1 rounded-b-lg bg-stone-800 p-3">
        <MockOmzshInput
			props={{
				user: user,
				name: name,
				dir: dir,
			}}
        />
        {input}
    </div>
</div>
