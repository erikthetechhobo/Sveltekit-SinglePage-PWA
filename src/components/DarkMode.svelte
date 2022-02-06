<script>
    function ToggleDark() {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    }
</script>

<button on:click={ToggleDark} id="ToggleDark">Dark Mode</button>

<style>
    #ToggleDark {
        color: var(--page-bg-color);
        background-color: var(--page-text);
        margin: 10px;
        max-width: 50px;
    }
</style>