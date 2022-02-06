<script>
    export let menuActive = false;
    let menuText = "=";

    function toggleMenu() {
        if(menuActive) {
            closeMenu();
        }
        else {
            openMenu();
        }
    }
    function closeMenu() {
        if(menuActive) {
            menuActive = false;
            menuText = "="
            document.getElementById("Menu").style.width = "";
            document.getElementById("Dropdown").style.display = "none";
        }
    }
    function openMenu() {
        if(menuActive == false) {
            menuActive = true;
            menuText = "x";
            document.getElementById("Menu").style.width = "var(--dropdown-width)";
            document.getElementById("Dropdown").style.display = "flex";
        }
    }
</script>

<nav id="NavBar" on:mouseleave={closeMenu} on:blur={closeMenu}>
    <a id="HomeLink" href="/" on:click={closeMenu}>Home</a>
    <button id="Menu" on:click={toggleMenu} >{menuText}</button>
    <div id="Dropdown">
        <a class="link" href="/" on:click={closeMenu}>Home</a>
    
        <a class="link" href="/pages/settings" on:click={closeMenu}>Settings</a>
    
        <a class="link" href="/pages/longpage" on:click={closeMenu}>Long Page</a>
    </div>
</nav>

<style>
    :root{
        --navbar-height: 60px;
        --dropdown-width: 200px;
    }
    #Menu {
        -webkit-appearance: none;
        border-style: none;
        height: var(--navbar-height);
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;
        font-size: 2rem;
        cursor: pointer;
    }
    #NavBar {
        height: var(--navbar-height);
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #Dropdown {
        display: none;
        height: calc(100vh - var(--navbar-height));
        flex-direction: column;
        position: absolute;
        top: var(--navbar-height);
        right: 0;
        width: var(--dropdown-width);
        text-align: left;
        font-size: 1.5rem;
        padding-bottom: 20px;
    }
    #HomeLink {
        font-size: 2rem;
        padding-left: 10px
    }
    .link{
        padding-left: 2rem;
        padding: 1rem;
    }
</style>