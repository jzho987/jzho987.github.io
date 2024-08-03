<script lang="ts">
	import Terminal from "../../components/terminal/terminal.svelte";

</script>

<div class="px-6 py-9 flex h-screen">
	<div class="flex flex-col flex-1">
		<h1 class="font-extralight text-stone-200 text-5xl">Jay Zhou</h1>
		<h1 class="font-extralight text-stone-200 text-2xl">Master's of Computer Science</h1>
	</div>
	<div class="flex flex-1">
		<Terminal 
			props={{
				user: "jayzhou",
				name: "JayZhou-Website",
				dir: "~/Desktop",
			}}
		/>
	</div>
</div>
