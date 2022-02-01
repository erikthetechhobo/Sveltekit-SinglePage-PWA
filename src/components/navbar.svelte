<script>
    let menuActive = false;
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
            document.getElementById("Menu").style.borderRadius = "var(--dropdown-open-radius)";
            document.getElementById("Dropdown").style.display = "none";
        }
    }
    function openMenu() {
        if(menuActive == false) {
            menuActive = true;
            menuText = "x";
            document.getElementById("Menu").style.width = "var(--dropdown-width)";
            document.getElementById("Menu").style.borderRadius = "var(--dropdown-closed-radius)";
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
    :root{
        --navbar-height: 60px;
        --dropdown-width: 200px;
        --dropdown-open-radius: 32px 0px 0px 32px;
        --dropdown-closed-radius: 32px 0px 0px 0px;
    }
    button {
        -webkit-appearance: none;
        border-style: none;
        height: var(--navbar-height);
        border-radius: var(--dropdown-open-radius);
        padding-left: 30px;
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
        flex-direction: column;
        position: absolute;
        top: var(--navbar-height);
        right: 0;
        width: var(--dropdown-width);
        border-radius: 0px 0px 0px 16px;
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
        padding-top: 1rem;
    }
</style>