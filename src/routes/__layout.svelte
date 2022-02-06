<script>
    import {onMount} from 'svelte';

    import NavBar from "../components/NavBar.svelte";
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
    const possibleBrowsers = [
        "Safari",
        "Macos Safari",
        "Mobile Chrome",
        "Macos Chrome",
        "Windows Chrome",
        "Linux Chrome",
        "Firefox",
        "Unknown",
    ];
    let browser = possibleBrowsers[possibleBrowsers.length - 1];
    onMount(() => {
        var browserTest = navigator.userAgent;
        if(browserTest.includes("Safari")) {
            browser = possibleBrowsers[0];
        }
        if(browserTest.includes("Safari") && browserTest.includes("Macintosh")) {
            browser = possibleBrowsers[1];
        }
        if(browserTest.includes("Chrome")) {
            browser = possibleBrowsers[2];
        }
        if(browserTest.includes("Chrome") && browserTest.includes("Macintosh")) {
            browser = possibleBrowsers[3];
        }
        if(browserTest.includes("Chrome") && browserTest.includes("Windows")) {
            browser = possibleBrowsers[4];
        }
        if(browserTest.includes("Chrome") && browserTest.includes("Linux")) {
            browser = possibleBrowsers[5];
        }
        if(browserTest.includes("Firefox")) {
            browser = possibleBrowsers[6];
        }
        pwaCheck = isRunningPWA();
        console.log(`pwa test pass: ${pwaCheck}`);
        console.log(browserTest);
    });
</script>

<NavBar/>
<!--entry point to url response-->
<slot />
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
    footer {
        min-height: var(--footer-height);
        position: -webkit-sticky;
        position: sticky;
        bottom: 0;

        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
    }
    img {
        margin: 0px;
    }
</style>