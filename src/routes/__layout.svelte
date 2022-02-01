<script>
    import {onMount} from 'svelte';

    import Navbar from "../components/navbar.svelte";

    let browser;
    //detects users browser
    onMount(async () => {

        const browserTest = await navigator.userAgent;
        if(browserTest.includes("Safari")) {
            browser = "Safari";
        }
        if(browserTest.includes("Chrome")) {
            browser = "Chrome";
        }
        if(browserTest.includes("Firefox")) {
            browser = "Firefox";
        }
        if(browserTest.includes("Edge")) {
            browser = "Edge";
        }
        if(browserTest.includes("Opera")) {
            browser = "Opera";
        }
        if(browserTest.includes("Trident")) {
            browser = "Internet Explorer";
        }
        window.addEventListener("load",function() {
            setTimeout(function() {
                window.scrollTo(0, 1);
            }, 1000);
        });
    });
</script>

<Navbar/>
<div id="PageReturn">
    <!--entry point to url response-->
    <slot />
</div>
<footer><span>Demo</span><span>Client: {browser}</span></footer>

<style>
    :root{
        --navbar-height: 56px;
        --footer-height: 28px;
        --content-height: calc(100vh - var(--navbar-height));
    }
    html {
        
    }
    footer {
        height: var(--footer-height);

        position: -webkit-sticky;
        position: sticky;
        bottom: 0;

        display: flex;
        justify-content: space-between;
        padding-left: 8px;
        padding-right: 8px;
    }
    #PageReturn {
        height: var(--content-height);
        overflow-y:auto;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>


