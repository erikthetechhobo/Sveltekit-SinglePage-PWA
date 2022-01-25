<script>
    import { fly, blur } from 'svelte/transition';
</script>

<div
    in:fly="{{  y: -50, duration: 200, delay: 300 }}"
    out:blur="{{ y: -50, duration: 200 }}" 
    >
    <slot/>
</div>