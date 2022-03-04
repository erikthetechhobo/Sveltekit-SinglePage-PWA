<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('onMount');
        createUnityInstance(document.querySelector("#unity-canvas"), {
          dataUrl: "/Build/build1.data",
          frameworkUrl: "/Build/build1.framework.js",
          codeUrl: "/Build/build1.wasm",
          streamingAssetsUrl: "StreamingAssets",
          companyName: "DefaultCompany",
          productName: "htmlBuildTest",
          productVersion: "0.1",
          // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
          // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
    });
    });
    
</script>
<div>
    <canvas id="unity-canvas" style="width: 200px; height: 200px; background: #231F20"></canvas>
    <script src="/Build/build1.loader.js"></script>
</div>