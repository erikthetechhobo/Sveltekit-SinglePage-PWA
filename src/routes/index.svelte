<script>
    import {onMount} from 'svelte';

    function hideStartButton() {
        var startButton = document.getElementById('StartButton');
        startButton.style.display = 'none';
    }

    function createScript() {
        return new Promise(resolve => {
            let unityLoaderScript = document.createElement('script');
            unityLoaderScript.src = '/Build/build1.loader.js';
            unityLoaderScript.id = 'myUnityLoaderScript';
            document.getElementById('UnityContainer').appendChild(unityLoaderScript);
            resolve('script created');
        })
    }
    function loadGame() {
        return new Promise(resolve =>{
            createUnityInstance(document.getElementById("UnityCanvas"), 
                {
                    dataUrl: "/Build/build1.data",
                    frameworkUrl: "/Build/build1.framework.js",
                    codeUrl: "/Build/build1.wasm",
                    streamingAssetsUrl: "StreamingAssets",
                    companyName: "DefaultCompany",
                    productName: "htmlBuildTest",
                    productVersion: "0.1",
                    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
                    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
                }
            )
            hideStartButton()
            resolve('game loaded');
        })
    }
    onMount(async () => {
        createScript();
    });
</script>
<div id="UnityContainer">
    <canvas id="UnityCanvas" />
</div>
<button id="StartButton" on:click={loadGame}>Start Unity</button>
<style>
    #UnityCanvas {
        display: block;
        height: inherit;
        width: 100%;
        background-color: var(--banner-bg-color);
    }
    #UnityContainer {
        height: inherit;
    }
    #StartButton {
        display: block;
        position: absolute;
        top: calc(50% - 11px);
        left: calc(50% - 37px);
        background-color:black;
    }
</style>