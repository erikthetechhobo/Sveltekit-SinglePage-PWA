# Sveltekit Single Page PWA

This is a template for a Single Page Progressive Web App(SPPWA)

```
npm install
npm run dev
```

Also viewable [here](https://sveltekit-node-deployment.herokuapp.com/)

```
npm run build
```

Builds as a node app in /build

## Features

### PWA client installability/usable features

#### Macos

##### Safari

* Install unsupported --- as per Apple

##### Chrome

* Install button in the address bar on the right side. Just left of the the share button

* Once installed it will be shown in Chrome Apps folder popup, this can be launched from there,  moved to the desktop, 'Applications' folder or anywhere you like

* Splash screen not supported

* To uninstall, run the PWA and click the ellipsis menu on the top right. click 'uninstall SVELTE-SPPWA'

#### Windows

##### Firefox:

* Install unsupported --- as per Mozilla

##### Chrome: 

* Not Tested Yet!!!

#### Android

##### Chrome:

* Can install from ellipsis menu. App will be located in app drawer

* Includes splash screen.

* Uninstallable like any other Android app

* Site will not reroute to app if site visted again --- feature in works

#### iOS

##### Safari:

* Can install from "Share Button -> 'Add to Home Screen'"

* Splash screen not supported --- as per Apple

* Site will not reroute to app if site visted again --- as per Apple

* Uninstallable like any other iPhone app

##### Chrome:

* Install unsupported --- as per Apple

### Styling

#### CSS

* /static/css contains 3 files; colors.css, fonts.css, and svelteSPPWA.css
    * svleteSPPWA.css: Resets default paddings and margins, and fits content to page
    * colors.css: all the color properties to the project, done in css variables
    * fonts.css: all your fonts

#### __layout.svelte

* /src/routes/__layout.svelte contains the variables to change UI size in the style tag
    * adjusting the navbar or footer hight automatically changes the returned pages hight
* The layout component also detects the user's browser onMount(). Any needed code for each browser can be added there. For now just a console.log() to show it's working

#### __error.svelte

* users will be redirected to this page in case of a fatal error

### Components

* /src/components contains two components; navbar.svelte and PageTransition.svelte
    * navbar.svelte is loaded at the top of the page in __layout.svelte
        * own component cause of complexity and can be deleted for other types of routing
    * PageTransition.svelte is a div wrapper that all pages go through for animation to page