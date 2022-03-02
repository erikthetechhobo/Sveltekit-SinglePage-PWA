<script>
    import {onMount} from 'svelte';

    import {browser, os, displayInstall, isPWArunning} from '$lib/stores/browserData'; 
    import detectBrowser from '$lib/utils/detectBrowser';

    import InstallMessage from "../components/installmessage.svelte";

    function updateViewportElements() {
        let appHeight = document.getElementById("App");
        if($os == 'iOS'){
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            appHeight.style.height = `calc(var(--vh, 1vh) * 100)`;
        }
        else {
            appHeight.style.height = `${window.innerHeight}px`;
        }
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
        window.addEventListener('resize', updateViewportElements);
        updateViewportElements();
        setInterval(updateViewportElements, 1000);
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
        position: sticky;
        flex-direction: column;
        padding: 10px;
    }
</style>