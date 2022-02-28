<script>
    import {onMount} from 'svelte';

    import {browser, os, displayInstall, isPWArunning} from '$lib/stores/browserData'; 
    import detectBrowser from '$lib/utils/detectBrowser';

    import InstallMessage from "../components/installmessage.svelte";

    function updateViewportElements() {
        let pageConent = document.getElementById("PageContent");
        pageConent.style.height = `calc(${window.innerHeight}px - var(--footer-height)`;
        if(pageConent.style.height == pageConent.scrollHeight) {
            pageConent.style.overflowY = `auto`;
        }
        else {
            pageConent.style.overflowY = `auto`;
        }
    };

    onMount(async () => {
        await detectBrowser.isInstallable();

        //auto resizes PageReturn to fill screen
        window.addEventListener('resize', updateViewportElements);
        document.getElementById("App").addEventListener('click', updateViewportElements);
        updateViewportElements();
    });
</script>

<div id="App">
<!--entry point to url response-->
    <div id="PageContent">
        <slot />
    </div>
<!--entry point to url response-->
    {#if $displayInstall}
        <InstallMessage/>
    {/if}
    <footer>
        {#if $isPWArunning}
            <span>Installed</span>
        {:else}
            {#if ($browser == "Chrome" && ($os == "Mac" || $os == "Windows" || $os == "Android")) || ($browser == "Safari" && $os == "iOS")}
                <span>Can be Installed</span>
            {:else}
                <span>Install not supported</span>
            {/if}
        {/if}
        <span>Client: {$os} {$browser}</span>
    </footer>
</div>

<style>
    :root{
        --footer-height: 30px;
    }
    #App{
        display: flex-box;
        flex-direction: column;
        overflow-y: hidden;
    }
    #PageContent{
        padding: 10px 10px 0 10px;
    }
    footer {
        min-height: var(--footer-height);
        display: flex;
        justify-content: space-between;
    }
    span {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>