<script>
    import PageTransition from "../../components/PageTransition.svelte";
    import DarkMode from "../../components/DarkMode.svelte";
</script>
<PageTransition>
    <h1>Settings</h1>
    <p>Toggle Dark Mode: <DarkMode /></p>
</PageTransition>

<style>
    p{
        display: flex;
        align-items: center;
    }
</style>
