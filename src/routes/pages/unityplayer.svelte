<script>
    import {onMount} from 'svelte';
    function createCanvas() {
        return new Promise(resolve =>{
            let unityCanvas = document.createElement('canvas');
            unityCanvas.id = 'unity-canvas';
            unityCanvas.style.width = '200px';
            unityCanvas.style.height = '300px';
            unityCanvas.style.backgroundColor = '#231F20';
            document.getElementById('ThisPage').appendChild(unityCanvas);
            resolve('canvas created');
        });
    }
    function createScript() {
        return new Promise(resolve => {
            let unityLoaderScript = document.createElement('script');
            unityLoaderScript.src = '/Build/build1.loader.js';
            unityLoaderScript.id = 'myUnityLoaderScript';
            document.getElementById('App').appendChild(unityLoaderScript);
            resolve('script created');
        })
    }
    function loadGame() {
        return new Promise(resolve =>{
            createUnityInstance(document.getElementById("unity-canvas"), {
                dataUrl: "/Build/build1.data",
                frameworkUrl: "/Build/build1.framework.js",
                codeUrl: "/Build/build1.wasm",
                streamingAssetsUrl: "StreamingAssets",
                companyName: "DefaultCompany",
                productName: "htmlBuildTest",
                productVersion: "0.1",
                // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
                // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
            })
            resolve('game loaded');
        })
    }
    onMount(async () => {
        await createCanvas();
        await createScript();
        await loadGame();

        window.onbeforeunload = function () {
            unityInstance.Quit();
        }
    });
</script>
<div id="ThisPage">

</div>
<button style="background-color:black" on:click={loadGame}>Start Unity</button>