<script>
    import {onMount} from 'svelte';

    import Navbar from "../components/navbar.svelte";

    let browser;
    let browserOptions= [];
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
        switch(browser) {
            case "Safari": browserOptions = { name: 'Safari', message: 'To install the Progresive Web App click the "<img src="/icons/shareButton.png" alt="apple share button" height="30px" width="24px">" button and add to home screen'}
                break;
            case "Chrome": browserOptions = { name: 'Chrome', message: 'To install the Progresive Web App click the "&#8942;" button in the top right and click install'}
                break;
            case "Firefox": browserOptions = { name: 'Firefox', message: 'Browser does not support Progressive Web Apps'}
                break;
            default: browserOptions = { name: 'Unsupported', message: 'Browser may not support Progressive Web Apps'}
                break;
        }
        console.log(browserOptions);
    });
</script>

<Navbar/>
<!--entry point to url response-->
<slot />
<footer><span>{browserOptions.message}</span><span>Client: {browser}</span></footer>

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
</style>


