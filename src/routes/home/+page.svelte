<script lang="ts">
	import tetrisRsProjectImage from "../../assets/tetris-rs-project.webp"
	import virtualPetGameImage from "../../assets/virtual-pet-game-project.webp"

	import Terminal from "../../components/terminal/terminal.svelte";
	import Card from "../../components/card.svelte";
	import ImageCard from "../../components/image_card.svelte";

	let aboutMe = `
	I am a master's of computer science student at the University of Auckland. On this page, there are information ahout education history, my ongoing research, my projects, and my work experience. Contact me through email or linked in if you want to learn more about who I am!
	`;
	let underGraduate = `
	Bachelors of Software Engineering (Honors) @ University of Auckland
	`;
	let postGraduate = `
	Master's of Computer Science, Pure Research @ University of Auckland
	`;
</script>

<div class="px-6 py-9 flex h-screen gap-10">
	<div class="flex flex-col w-1/2 px-6">
		<h1 class="font-extralight text-stone-200 text-5xl mb-1">Jay Zhou</h1>
		<h1 class="font-extralight text-stone-200 text-2xl mb-6">Master's of Computer Science</h1>
		<Card props={{
			title: "about me",
			text: aboutMe,
		}}/>
		<div class="flex flex-row mt-8 gap-4 h-40">
			<Card Class="grow"
				props={{
					title: "post graduate",
					text: postGraduate,
			}}/>
			<Card Class="grow"
				props={{
					title: "under graduate",
					text: underGraduate,
			}}/>
		</div>
		<div class="flex flex-row overflow-auto overflow-y-auto mt-8 gap-5 h-60">
			<ImageCard props={{
				src: tetrisRsProjectImage,
				label: "Tetris in Rust",
			}}/>
			<ImageCard props={{
				src: virtualPetGameImage,
				label: "Virtual Pet Game",
			}}/>
			<ImageCard props={{
				src: virtualPetGameImage,
				label: "Virtual Pet Game",
			}}/>
			<ImageCard props={{
				src: virtualPetGameImage,
				label: "Virtual Pet Game",
			}}/>
		</div>
	</div>
	<div class="flex w-1/2">
		<Terminal 
			props={{
				user: "jayzhou",
				name: "JayZhou-Website",
				dir: "~/Desktop",
			}}
		/>
	</div>
</div>
