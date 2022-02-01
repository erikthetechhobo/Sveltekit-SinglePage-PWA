<script>
    import { fly, blur } from 'svelte/transition';
</script>

<main
    in:fly="{{  x: 300, duration: 200, delay: 300 }}"
    out:blur="{{ x: -300, duration: 200 }}" 
    >
    <slot/>
</main>

<style>
    main {
        height: calc(100vh - var(--navbar-height) - var(--footer-height));
        padding-left: 10px;
        padding-right: 10px;
        overflow: auto;
    }
</style>