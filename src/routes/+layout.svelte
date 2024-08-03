<script lang="ts">
    import "../app.css";
    import AppBar from "../components/app_bar.svelte";
</script>

<div class="flex">
    <AppBar />
    <div class="flex-1 bg-gray-700">
        <slot />
    </div>
</div>