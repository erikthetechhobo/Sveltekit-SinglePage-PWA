<script>
    import { fly, blur } from 'svelte/transition';
    let animationSync = 500;
</script>

<main
    in:fly="{{  x: 60, duration: animationSync, delay: animationSync }}"
    out:fly="{{ x: -60, duration: animationSync }}" 
    >
    <div id="PageReturn">
        <slot/>
    </div>
</main>

<style>
    main {
        height: calc(100vh - var(--navbar-height) - var(--footer-height));
        padding-left: 10px;
        padding-right: 10px;
        overflow-y: auto;
    }
    #PageReturn {
        padding-bottom: calc(var(--footer-height) * 2);
    }
</style>