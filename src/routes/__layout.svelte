<script>
    import {onMount} from 'svelte';

    import Navbar from "../components/navbar.svelte";

    //footer data
    var date = new Date();
    var year = date.getFullYear();

    //detects users browser
    onMount(async () => {
        let browser;

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
        console.log('Detected browser: ' + browser);
    });
</script>

<Navbar/>
<div id="PageReturn">
    <!--entry point to url response-->
    <slot />
</div>
<footer><span>{year}&copy;</span></footer>

<style>
    :root{
        --dropdown-width: 200px;
        --navbar-height: 56px;
        --footer-height: 28px;
        --content-height: calc(100vh - calc(var(--navbar-height) + var(--footer-height)));
    }
    footer {
        position: -webkit-sticky;
        position: sticky;
        bottom: 0;
        height: var(--footer-height);
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
    #PageReturn {
        display: flex;
        flex-direction: column;
        height: var(--content-height);
        overflow-y:auto;
        padding-left: 8px;
        padding-right: 8px;
    }
</style>


