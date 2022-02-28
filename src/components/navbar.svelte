<script>
    let menuActive = false;
    let menuText = "=";

    function refreshPage(){
        window.location.reload();
    }
    
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
            document.getElementById("NavButton").style.width = "";
            document.getElementById("SideMenu").style.display = "none";
        }
    }
    function openMenu() {
        if(menuActive == false) {
            menuActive = true;
            menuText = "x";
            document.getElementById("NavButton").style.width = "var(--sidemenu-width)";
            document.getElementById("SideMenu").style.display = "flex";
        }
    }
</script>

<nav id="NavBar" on:mouseleave={closeMenu} on:blur={closeMenu}>
    <a id="HomeLink" href="/" on:click={closeMenu}>Home</a>
    <span id="RefreshButton" on:click={refreshPage}>&#x21bb;</span>
    <button id="NavButton" on:click={toggleMenu} >{menuText}</button>
    <nav id="SideMenu">
        <a class="link" href="/" on:click={closeMenu}>Home</a>
    
        <a class="link" href="/pages/settings" on:click={closeMenu}>Settings</a>
    
        <a class="link" href="/pages/longpage" on:click={closeMenu}>Long Page</a>
    </nav>
</nav>

<style>
    :root{
        --navbar-height: 60px;
        --sidemenu-width: 200px;
    }
    #NavBar {
        height: var(--navbar-height);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        z-index: 1;
    }
    #NavButton {
        -webkit-appearance: none;
        border-style: none;
        height: var(--navbar-height);
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;
        font-size: 2rem;
        cursor: pointer;
        
    }
    #RefreshButton{
        font-size: 3rem;
        border-radius: 16px;
        right: 20px;
        color: var(--banner-bg-color);
        background-color: var(--alert-color);
        cursor: pointer;
        margin-right: 10px;
    }
    #RefreshButton:hover{
        color: var(--alert-color);
        background-color: var(--banner-button-active);
    }
    #SideMenu {
        display: none;
        flex-direction: column;
        position: fixed;
        top: var(--navbar-height);
        right: 0;
        width: var(--sidemenu-width);
        text-align: left;
        font-size: 1.5rem;
    }
    #HomeLink {
        font-size: 2rem;
        padding-left: 10px;
        flex-grow: 1;
    }
    .link{
        padding-left: 2rem;
        padding: 1rem;
    }
</style>