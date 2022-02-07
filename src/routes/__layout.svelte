<script>
    import {onMount} from 'svelte';

    import Navbar from "../components/navbar.svelte";
    //detects if running app or in browser
    let pwaCheck;
    const isRunningPWA = () => {
        // For Safari
        if(window.navigator.standalone) return true

        // For Chrome
        if(window.matchMedia('(display-mode: standalone)').matches) return true

        // If neither is true, it's not installed
        return false
    }

    //detects users browser
    let browser;
    onMount(async () => {
        var browserTest = await navigator.userAgent;
        if(browserTest.includes("Safari")) {
            browser = "Safari";
        }
        if(browserTest.includes("Safari") && browserTest.includes("Macintosh")) {
            browser = "Macos Safari";
        }
        if(browserTest.includes("Chrome")) {
            browser = "Mobile Chrome";
        }
        if(browserTest.includes("Chrome") && browserTest.includes("Macintosh")) {
            browser = "Macos Chrome";
        }
        if(browserTest.includes("Chrome") && browserTest.includes("Windows")) {
            browser = "Windows Chrome";
        }
        if(browserTest.includes("Chrome") && browserTest.includes("Linux")) {
            browser = "Linux Chrome";
        }
        if(browserTest.includes("Firefox")) {
            browser = "Firefox";
        }
        pwaCheck = isRunningPWA();

        const svelteContainer = document.getElementById("PageReturn");
        const updateViewportElements = () => {
            svelteContainer.style.height = `calc(${window.innerHeight}px - var(--footer-height) - var(--navbar-height))`;
        };

        window.addEventListener('resize', updateViewportElements);

        updateViewportElements();
    });

    
</script>

<Navbar/>
<!--entry point to url response-->
<div id="PageReturn">
    <slot />
</div>
<footer>
    {#if pwaCheck}
        <span>Installed</span><span>Client: {browser}</span>
    {:else}
        {#if browser == "Safari"}
            <span>To install Web App, tap the <img src="/icons/shareButton.png" alt="apple share button" height="15px" width="12px"> and "Add to Homescreen"</span><span>Client: {browser}</span>
        {:else if browser == "Mobile Chrome" || browser == "Macos Chrome"}
            <span>To install Web App, tap the &#8942; in the top right of your browser and click install</span><span>Client: {browser}</span>
        {:else if browser == "Windows Chrome"}
            <span>To install Web App, click the install button located in the address bar</span><span>Client: {browser}</span>
        {:else}
            <span>Install not supported</span><span>Client: {browser}</span>
        {/if}
    {/if}
</footer>

<style>
    :root{
        --footer-height: 30px;
    }
    #PageReturn{
        z-index: 0;
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
    img {
        margin: 0px;
    }
    span {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>