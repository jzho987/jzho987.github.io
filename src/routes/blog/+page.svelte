<script lang="ts">
	import BlogCard from "../../components/blog_card.svelte";
	import ButtonStyled from "../../components/button_styled.svelte";
    import cookingRandom from "../../assets/cooking-random.webp";

    type blogCatagory = {
        name: string,
    }

    type blogSummary = {
        title: string,
        abstract: string,
        image: string,
    }

    let catagories: blogCatagory[] = [
        { name: "all" },
        { name: "technology" },
        { name: "cooking" },
    ];

    let blogSummaries: blogSummary[] = [
        {
            title: "This is a title",
            abstract: "This is an abstract ok.",
            image: cookingRandom,
        },
        {
            title: "This is a title",
            abstract: "This is an abstract ok.",
            image: cookingRandom,
        },
        {
            title: "This is a title",
            abstract: "This is an abstract ok.",
            image: cookingRandom,
        },
        {
            title: "This is a title",
            abstract: "This is an abstract ok.",
            image: cookingRandom,
        },
        {
            title: "This is a title",
            abstract: "This is an abstract ok.",
            image: cookingRandom,
        },
    ];

    const handleSwitchCatagory = (catagory: blogCatagory) => {
        console.log(`switched to ${catagory.name}`)
    }
</script>

<div class="px-10 py-9 h-screen gap-10 flex flex-col items-center">
    <h1 class="font-extralight text-stone-200 text-5xl mb-1">Jay's Random Blogs</h1>
    <div class="flex flex-row gap-4">
        {#each catagories as catagory}
            <div class="min-w-36">
                <ButtonStyled props={{
                    text: catagory.name,
                    onClick: () => handleSwitchCatagory(catagory)
                }}/>
            </div>
        {/each}
    </div>
    <div class="flex flex-col w-full h-full overflow-x-scroll px-40 gap-10">
        {#each blogSummaries as blogSummary}
            <BlogCard props={{
                image: blogSummary.image,
                title: blogSummary.title,
                text: blogSummary.abstract,
            }}/>
        {/each}
    </div>
</div>