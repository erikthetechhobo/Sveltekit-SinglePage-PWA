<script>
    import {onMount} from 'svelte';

    import {browser, os, displayInstall, isPWArunning} from '$lib/stores/browserData'; 
    import detectBrowser from '$lib/utils/detectBrowser';

    import InstallMessage from "../components/installmessage.svelte";

    function updateViewportElements() {
        let appHeight = document.getElementById("svelte");
        appHeight.style.height = `${window.innerHeight}px`
        console.log(appHeight.style.height, appHeight.scrollHeight);
        if(appHeight.style.height == appHeight.scrollHeight) {
            appHeight.style.overflowY = `hidden`;
        }
        else {
            appHeight.style.overflowY = `auto`;
        }
    };

    onMount(async () => {
        await detectBrowser.isInstallable();

        //auto resizes PageReturn to fill screen
        await window.addEventListener('resize', updateViewportElements);
        await updateViewportElements();
    });
</script>

<div id="App">
<!--entry point to url response-->
    <slot />
<!--entry point to url response-->
    {#if $displayInstall}
        <InstallMessage/>
    {/if}
</div>

<style>
    #App{
        padding-left: 10px;
        padding-right: 10px;
    }
</style>