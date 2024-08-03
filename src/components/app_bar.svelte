<script>
    import self from "../assets/self.webp";
	import ButtonStyled from "./button_styled.svelte";
	import DivideLine from "./divide_line.svelte";
</script>

<div class="bg-zinc-500 h-screen w-36 p-3">
    <div class="pb-6">
        <img alt="icon" src={self}
            class="rounded-md"
        />
    </div>
    <div class="flex flex-row flex-col">
        <ButtonStyled text={"home"}/>
        <DivideLine />
        <ButtonStyled text={"project"}/>
        <DivideLine />
        <ButtonStyled text={"contact"}/>
    </div>
</div>