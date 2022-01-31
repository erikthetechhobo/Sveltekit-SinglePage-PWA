<script>
    let menuActive = false;
    let menuText = "Menu";

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
            menuText = "Menu"
            document.getElementById("Menu").style.width = "";
            document.getElementById("Menu").style.borderRadius = "32px 0px 0px 32px";
            document.getElementById("Dropdown").style.display = "none";
        }
    }
    function openMenu() {
        if(menuActive == false) {
            menuActive = true;
            menuText = "X";
            document.getElementById("Menu").style.width = "var(--dropdown-width)";
            document.getElementById("Menu").style.borderRadius = "32px 0px 0px 0px";
            document.getElementById("Dropdown").style.display = "flex";
        }
    }
</script>

<div id="NavBar" on:mouseleave={closeMenu} on:blur={closeMenu}>
    <a id="HomeLink" href="/" on:click={closeMenu}>Home</a>
    <button id="Menu" on:click={toggleMenu} >{menuText}</button>
    <div id="Dropdown">
            <a class="link" href="/" on:click={closeMenu}>home</a>
        
            <a class="link" href="/pages/page2" on:click={closeMenu}>page 2</a>
        
            <a class="link" href="/pages/longpage" on:click={closeMenu}>long page</a>
    </div>
</div>

<style>
    button {
        -webkit-appearance: none;
        border-style: none;
        height: var(--navbar-height);
        border-radius: 32px 0px 0px 32px;
        padding-left: 32px;
        padding-right: 24px;
        text-align: left;
        font-size: 24px;
        cursor: pointer;
    }
    #NavBar {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: var(--navbar-height);
    }
    #Dropdown {
        display: none;
        flex-direction: column;
        position: absolute;
        top: var(--navbar-height);
        right: 0;
        width: var(--dropdown-width);
        list-style-type: none;
        border-radius: 0px 0px 0px 16px;
        text-align: left;
        font-size: 24px;
        padding-bottom: 1rem;
    }
    #HomeLink {
        font-size: 32px;
        padding: 10px;
    }
    .link{
        padding-left: 2rem;
        padding-top: 1rem;
    }
</style>