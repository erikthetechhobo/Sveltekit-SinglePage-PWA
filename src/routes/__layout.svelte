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
        //event listener on load scroll down 1px
        window.addEventListener('load', () => {
            window.scrollTo(0, 1);
        });
    });
</script>

<Navbar/>
<!--entry point to url response-->
<slot />
<footer><span>Demo</span><span>Client: {browser}</span></footer>

<style>
    :root{
        --footer-height: 30px;
    }
    footer {
        min-height: var(--footer-height);
        margin-top: auto;

        position: -webkit-sticky;
        position: sticky;
        bottom: 0;

        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>


