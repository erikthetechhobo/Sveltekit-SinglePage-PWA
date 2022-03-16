<script>
    import {onMount} from 'svelte';

    import {displayInstall, isPWArunning} from '$lib/stores/browserData'; 
    import detectBrowser from '$lib/utils/detectBrowser';

    import InstallMessage from "../components/installmessage.svelte";

    var myInterval;
    function updateViewportElements() {
        let appHeight = document.getElementById("svelte");
        appHeight.style.height = `${window.innerHeight}px`
        //console.log("svelte div height: " + appHeight.style.height + `\npage height: ${appHeight.scrollHeight}px`);
        if(appHeight.style.height == `${appHeight.scrollHeight}px`) {
            appHeight.style.overflowY = `hidden`;
        }
        else {
            appHeight.style.overflowY = `auto`;
        }
        detectBrowser.PWAcheck()
        if($isPWArunning) {
            clearInterval(myInterval);
        }
    };
    onMount(async () => {
        await detectBrowser.isInstallable();

        //auto resizes PageReturn to fill screen
        await window.addEventListener('resize', updateViewportElements);
        myInterval = await setInterval(updateViewportElements, 1000);
        await updateViewportElements();
    });
</script>

<!--entry point to url response-->
<slot />
<!--entry point to url response-->
{#if $displayInstall}
    <InstallMessage/>
{/if}