<script context="module">

</script>
<script>
    import {onMount} from 'svelte';

    import Navbar from "../components/navbar.svelte";

    let browser;

    let pwaCheck
    export function isRunningPWA() {
        // For iOS
        if(window.navigator.standalone) return pwaCheck = true

        // For Android
        if(window.matchMedia('(display-mode: standalone)').matches) pwaCheck = true


        // If neither is true, it's not installed
        return pwaCheck = false
    }

    //detects users browser
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
        if(browserTest.includes("Firefox")) {
            browser = "Firefox";
        }
        isRunningPWA();
        console.log(browserTest);
    });
</script>

<Navbar/>
<!--entry point to url response-->
<slot />
{#if pwaCheck}
    <footer><span>Installed</span><span>Client: {browser}</span></footer>
{:else}
    {#if browser == "Safari"}
        <footer><span>To install Web App, tap the <img src="/icons/shareButton.png" alt="apple share button" height="15px" width="12px"> and "Add to Homescreen"</span><span>Client: {browser}</span></footer>
    {:else if browser == "Mobile Chrome" || browser == "Macos Chrome"}
        <footer><span>To install Web App, tap the &#8942; in the top right of your browser and click install</span><span>Client: {browser}</span></footer>
    {:else if browser == "Windows Chrome"}
        <footer><span>To install Web App, click the install button located in the address bar</span><span>Client: {browser}</span></footer>
    {:else}
        <footer><span>Install not supported</span><span>Client: {browser}</span></footer>
    {/if}
{/if}

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


