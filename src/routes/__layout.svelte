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
    let chosenMessage;
    let browserMessages = [
        `To install Web App, tap the <img src="/icons/shareButton.png" alt="apple share button" height="15px" width="12px"> and "Add to Homescreen"`,
        `To install Web App, tap the &#8942; in the top right of your browser and click install`,
        `To install Web App, click the install button located in the address bar or from &#8942; in the top right of your browser`,
        `Web app unsupported by browser.`,
    ];
    //detects users browser
    let browser;
    onMount(async () => {
        var browserTest = await navigator.userAgent;
        if(browserTest.includes("Safari")) {
            browser = "Safari";
            chosenMessage = browserMessages[0];
        }
        if(browserTest.includes("Safari") && browserTest.includes("Macintosh")) {
            browser = "Macos Safari";
            chosenMessage = browserMessages[3];
        }
        if(browserTest.includes("Chrome")) {
            browser = "Mobile Chrome";
            chosenMessage = browserMessages[1];
        }
        if(browserTest.includes("Chrome") && browserTest.includes("Macintosh")) {
            browser = "Macos Chrome";
            chosenMessage = browserMessages[3];
        }
        if(browserTest.includes("Chrome") && browserTest.includes("Windows")) {
            browser = "Windows Chrome";
            chosenMessage = browserMessages[2];
        }
        if(browserTest.includes("Firefox")) {
            browser = "Firefox";
            chosenMessage = browserMessages[3];
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
        {#if browser == "Safari" || browser == "Mobile Chrome" || browser == "Macos Chrome" || browser == "Windows Chrome"}
            <span>Installable</span><span>Client: {browser}</span>
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
    span {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>