<script>
    import { fly, blur } from 'svelte/transition';
    let animationSync = 500;
</script>

<main
    in:fly="{{  x: 60, duration: animationSync, delay: animationSync }}"
    out:fly="{{ x: -60, duration: animationSync }}" 
    >
    <slot/>
</main>