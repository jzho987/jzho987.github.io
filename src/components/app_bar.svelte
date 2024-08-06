<script lang="ts">
    import self from "../assets/self.webp";
	import ButtonStyled from "./button_styled.svelte";
	import DivideLine from "./divide_line.svelte";
	import { goto } from "$app/navigation";

    export const handleGoToPage = (route: string) => {
        goto(route);
    }
</script>

<div class="bg-zinc-500 h-screen w-36 p-3">
    <div class="pb-6">
        <img alt="icon" src={self}
            class="rounded-md"
        />
    </div>
    <div class="flex flex-col">
        <ButtonStyled props={{
            text: "home",
            onClick: () => {handleGoToPage("/home")},
        }}/>
        <DivideLine />
        <ButtonStyled props={{
            text: "projects",
            onClick: () => {handleGoToPage("/projects")},
        }}/>
        <DivideLine />
        <ButtonStyled props={{
            text: "blog",
            onClick: () => {handleGoToPage("/blog")},
        }}/>
    </div>
</div>