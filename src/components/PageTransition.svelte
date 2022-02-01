<script>
    import { fly, blur } from 'svelte/transition';
</script>

<main
    in:fly="{{  y: -50, duration: 200, delay: 300 }}"
    out:blur="{{ y: -50, duration: 200 }}" 
    >
    <slot/>
</main>

<style>
    main {
        padding-left: 10px;
        padding-right: 10px;
        overflow: hidden;
    }
</style>