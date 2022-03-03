<script>
    import {onMount} from 'svelte';

    import {browser, os, displayInstall, isPWArunning} from '$lib/stores/browserData'; 
    import detectBrowser from '$lib/utils/detectBrowser';

    import InstallMessage from "../components/installmessage.svelte";

    var myInterval;
    function updateViewportElements() {
        let appHeight = document.getElementById("svelte");
        appHeight.style.height = `${window.innerHeight}px`
        console.log(appHeight.style.height, `${appHeight.scrollHeight}px`);
        if(appHeight.style.height == `${appHeight.scrollHeight}px`) {
            appHeight.style.overflowY = `hidden`;
        }
        else {
            appHeight.style.overflowY = `auto`;
        }
        detectBrowser.isInstallable()
        if($isPWArunning) {
            clearInterval(myInterval);
        }
    };

    onMount(async () => {
        await detectBrowser.isInstallable();

        //auto resizes PageReturn to fill screen
        await window.addEventListener('resize', updateViewportElements);
        await updateViewportElements();

        myInterval = setInterval(updateViewportElements, 1000);
    });
</script>

<div id="App">
    <a href="/">Home</a>
    <a href="/pages/fullpage" >fullpage</a>
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