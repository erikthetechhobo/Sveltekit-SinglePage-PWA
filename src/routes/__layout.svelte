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

    let displayInstallPrompt;
    function closeInstallPrompt() {
        displayInstallPrompt = false;
    }

    let browser;    
    onMount(async () => {
        let browserTest = await navigator.userAgent;
        let pageContainer = document.getElementById("PageReturn");
        pwaCheck = isRunningPWA();

        if(browserTest.includes("Safari")) {
            browser = "Safari";
            displayInstallPrompt = true;
        }
        if(browserTest.includes("Safari") && browserTest.includes("Macintosh")) {
            browser = "Macos Safari";
            displayInstallPrompt = false;
        }
        if(browserTest.includes("Chrome")) {
            browser = "Mobile Chrome";
            displayInstallPrompt = true;
        }
        if(browserTest.includes("Chrome") && browserTest.includes("Macintosh")) {
            browser = "Macos Chrome";
            displayInstallPrompt = true;
        }
        if(browserTest.includes("Chrome") && browserTest.includes("Windows")) {
            browser = "Windows Chrome";
            displayInstallPrompt = true;
        }
        if(browserTest.includes("Firefox")) {
            browser = "Firefox";
            displayInstallPrompt = false;
        }
        if(pwaCheck) {
            displayInstallPrompt = false;
        }

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
    {#if displayInstallPrompt}
        <div id="InstallMessage">
            {#if browser == "Safari"}
                <p>To install Web App, tap the <img src="/icons/shareButton.png" alt="apple share button" height="15px" width="12px"> and "Add to Homescreen"</p>
            {/if}
            {#if browser == "Mobile Chrome" || browser == "Macos Chrome"}
                <p>To install Web App, tap the &#8942; in the top right of your browser and click install</p>
            {/if}
            {#if browser == "Windows Chrome"}
                <p>To install Web App, click the install button located in the address bar or from &#8942; in the top right of your browser</p>
            {/if}
            <button on:click={closeInstallPrompt}>Close</button>
        </div>
    {/if}
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
    #InstallMessage {
        position: fixed;
        bottom: calc(var(--footer-height) + 10px);
        right: 25%;
        left: 25%;
        font-size: 1rem;
        border-radius: 16px;
        text-align: center;
        z-index: 2;
    }
    #PageReturn{
        z-index: 0;
        padding-left: 10px;
        padding-right: 10px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    footer {
        z-index: 1;
        min-height: var(--footer-height);
        display: flex;
        justify-content: space-between;
    }
    span {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>