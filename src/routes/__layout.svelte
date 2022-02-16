<script>
    import {onMount} from 'svelte';

    import {browser, os, displayInstall, isPWArunning} from '$lib/stores/browserData'; 
    import detectBrowser from '$lib/utils/detectBrowser';

    import Navbar from "../components/navbar.svelte";
    import InstallMessage from "../components/installmessage.svelte";
  
    onMount(async () => {
        await detectBrowser.isInstallable();
        
        //auto resizes PageReturn to fill screen
        let pageContainer = document.getElementById("PageReturn");
        const updateViewportElements = () => {
            pageContainer.style.height = `calc(${window.innerHeight}px - var(--footer-height) - var(--navbar-height))`;
        };
        window.addEventListener('resize', updateViewportElements);
        updateViewportElements();
    });
</script>

<Navbar/>
<div id="PageReturn">
<!--entry point to url response-->
    <slot />
<!--entry point to url response-->
    {#if $displayInstall}
        <InstallMessage/>
    {/if}
</div>
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

<style>
    :root{
        --footer-height: 30px;
    }
    #PageReturn{
        padding-left: 10px;
        padding-right: 10px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
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