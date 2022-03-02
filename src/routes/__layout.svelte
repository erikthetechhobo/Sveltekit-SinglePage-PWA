<script>
    import {onMount} from 'svelte';

    import {browser, os, displayInstall, isPWArunning} from '$lib/stores/browserData'; 
    import detectBrowser from '$lib/utils/detectBrowser';

    import InstallMessage from "../components/installmessage.svelte";

    function updateViewportElements() {
        let appHeight = document.getElementById("App");
        appHeight.style.height = `${window.innerHeight}px`
        console.log(`appHeight: ${appHeight.style.height}`);
        if(appHeight.style.height < appHeight.scrollHeight) {
            appHeight.style.overflowY = `hidden`;
        }
        else {
            appHeight.style.overflowY = `scroll`;
        }
    };

    onMount(async () => {
        await detectBrowser.isInstallable();

        //auto resizes PageReturn to fill screen
        await window.addEventListener('resize', updateViewportElements);
        await updateViewportElements();
        if(!isPWArunning) {
            if($os == "iOS") {
                setInterval(updateViewportElements, 1000);;
            }
        }
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
    :root{
        --footer-height: 30px;
    }
    #App{
        height: var(--height);
        position: sticky;
        flex-direction: column;
        padding: 10px;
    }
</style>