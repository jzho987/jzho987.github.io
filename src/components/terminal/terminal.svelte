<script lang="ts">
	import MockMacActionButtons from "./mock_mac_action_buttons.svelte";

    export let name;
    export let user;
    export let dir;
</script>

<div class="flex flex-col flex-1">
    <div class="rounded-t-lg bg-stone-200 p-2 flex flex-row items-center">
        <MockMacActionButtons />
        <div class="flex flex-1 justify-center">
            <p class="text-sm text-gray-800">{user}@{name}:{dir}</p>
        </div>
    </div>
    <div class="flex-1 rounded-b-lg bg-stone-800 p-3">
        <p class="text-sm font-extralight text-stone-300">{user} at {name} in {dir}</p>
    </div>
</div>
