const toggleButton=document.getElementsByClassName('toggle-button')[0]
const sidebar=document.getElementsByClassName('side-bar')[0]
const navcontents=document.getElementsByClassName('nav-contents')[0]
const playlists=document.getElementsByClassName('playlists')[0]
const recom=document.getElementsByClassName('recom')[0]



toggleButton.addEventListener(click, () => {
    sidebar.classList.toggle(active)
    navcontents.classList.toggle(active)
    playlists.classList.toggle(active)
    recom.classList.toggle(active)
})